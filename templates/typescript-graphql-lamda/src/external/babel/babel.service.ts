import { XmlEntities } from 'html-entities';
import { getLowestPrice, getHighestPrice } from '../../utils';

const entities = new XmlEntities();
const UNABLE_TO_GET_PRICES_ERROR = 'Unable to getPrices';
const extractBabelHeaders = (clientId, { brand, locale }, requestId) => ({
    'X-Babel-Client': clientId,
    'X-Group-Brand': brand,
    'X-Group-Locale': locale,
    'X-Request-Id': requestId,
});

const errorCheck = data => {
    if (data.length == 0) return new Error(UNABLE_TO_GET_PRICES_ERROR);
    return data;
};

const normalisePrice = volumePrices => {
    const fromPrice = getLowestPrice('price')(volumePrices);
    const highestPrice = getHighestPrice('price')(volumePrices);

    // flatten babel "h" structure into simpler format for options array
    // (though nothing uses this yet)

    const options = [];
    const opt = volumePrices[0].options;

    if (opt) {
        Object.keys(opt).map(code => {
            const pt = {
                id: code,
            };

            Object.keys(opt[code].h).map(prop => {
                pt[prop] = opt[code].h[prop];
            });

            options.push(pt);
        });
    }

    const optCost = options.reduce(function(total, obj) {
        return total + parseFloat(obj.price);
    }, 0.0);

    return Object.assign(
        { pricePerPage: volumePrices[0].pricePerPage ? volumePrices[0].pricePerPage : undefined },
        {
            now: fromPrice.now,
            options,
            was: fromPrice.was,
            price: highestPrice.price,
            optionPrice: `${optCost}`,
            wasPrice: highestPrice.wasPrice,
            fromPrice: fromPrice.fromPrice,
            expiry: fromPrice.expiry,
            min: fromPrice.min,
            volumePrices,
        },
    );
};

const getPrices = (safeFetch, config, baseUrl, clientId, logger, cache) => async (
    id,
    pagination,
    babelOptionIds,
    babelConfig,
    ctx,
) => {
    //  when pagination data is present, fetchPrices is called twice.
    //  the first time to get just the price per page
    //  and the second time to get the actual price, with the price per page from
    //  the first call dropped into place.

    const { pages } = ctx.query || {};
    let numberOfPages = 0;

    if (pages) {
        numberOfPages = parseInt(pages);
    }

    if (!babelOptionIds) {
        babelOptionIds = [];
    }

    const fetchPrices = async (url, clientId, babelConfig, requestId) => {
        const params = {
            method: 'GET',
            headers: extractBabelHeaders(clientId, babelConfig, requestId),
            timeout: config.get('babelService.fetch.timeout'),
            retries: config.get('babelService.fetch.retries'),
        };

        const cacheKey = `${url}-${params.method}-${params.headers['X-Group-Brand']}-${params.headers['X-Group-Locale']}`;
        const cacheValue = await cache.get(cacheKey, { logger });

        if (cacheValue) {
            return cacheValue;
        }

        const result = await safeFetch(url, params);

        if (result.isRight) {
            await cache.set(cacheKey, result.value);
        }

        return result;
    };

    const processArray = async arr => {
        let pagePrice = {};
        const data = [];

        for (const pageCnt of arr) {
            const { channelId } = babelConfig;
            const requestId = ctx.state && ctx.state.outboundRequestId;
            const pageCount =
                pageCnt === -1
                    ? numberOfPages
                    : pagination
                    ? pageCnt === 1
                        ? pagination.minPageCount + 1
                        : pagination.minPageCount
                    : 0;
            const optionParam =
                babelOptionIds.length > 0 ? '&options=[' + babelOptionIds.join(',') + ']' : '';

            let url = '';
            if (channelId) {
                url = `${baseUrl}/v2/Shopping/Product/${id}/GetPrices?channel_id=${channelId}&show_non_promo=1${optionParam}${
                    pageCount ? `&page_count=${pageCount}` : ''
                }`;
            } else {
                logger.warn(
                    {
                        request_id: requestId,
                    },
                    'Requesting prices from babel without a channel id',
                );
                url = `${baseUrl}/v2/Shopping/Product/${id}/GetPrices?show_non_promo=1${optionParam}${
                    pageCount ? `&page_count=${pageCount}` : ''
                }`;
            }

            const result = await fetchPrices(url, clientId, babelConfig, requestId);

            if (result.isRight) {
                const res = result
                    .map(prices =>
                        prices.value.reduce(
                            (acc, price) =>
                                acc.concat(
                                    Object.assign(
                                        {
                                            pricePerPage:
                                                pageCnt != -1
                                                    ? price.h.pages
                                                        ? price.h.pages.h
                                                        : undefined
                                                    : undefined,
                                        },
                                        {
                                            options: price.h.options ? price.h.options.h : [],
                                            now: entities.decode(price.h.price_html),
                                            was:
                                                (price.h.non_promo_price_html &&
                                                    entities.decode(
                                                        price.h.non_promo_price_html,
                                                    )) ||
                                                entities.decode(price.h.price_html),
                                            price: price.h.price,
                                            wasPrice: price.h.non_promo_price || price.h.price,
                                            fromPrice: price.h.price,
                                            expiry: price.h.expiry || '',
                                            min: price.h.quantity,
                                        },
                                    ),
                                ),
                            [],
                        ),
                    )
                    .getOrElse([]);

                if (pageCnt === 1) {
                    pagePrice = res[0].pricePerPage;
                } else {
                    res.map(dat => {
                        data.push(dat);
                    });
                    if (pagination && pageCnt != -1) {
                        if (pagination.defaultPageCount) {
                            data[0].pricePerPage = pagePrice;
                        }
                    }
                }
            } else {
                return `Failed to get prices: URL: ${url}`;
            }
        }

        return errorCheck(normalisePrice(data));
    };

    const pageCntArr = numberOfPages > 0 ? [-1] : pagination ? [1, 0] : [0];

    const volumePrices = await processArray(pageCntArr);

    return volumePrices;
};

export default (safeFetch, config, baseUrl, clientId, logger, cache) => ({
    getPrices: getPrices(safeFetch, config, baseUrl, clientId, logger, cache),
});
