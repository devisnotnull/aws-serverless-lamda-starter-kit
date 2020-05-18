import { path } from 'rambda';

const handleResponse = async res => {
    if (res.ok) {
        return await res.json();
    }
    const text = await res.clone().text();
    throw new Error(text);
};

export const safeFetch = (fetch, logger) => async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await handleResponse(res);
    } catch (e) {
        logger.error({ request_id: path(['headers', 'X-Request-Id'], options) }, `${e.message}`);
        return e.message;
    }
};

export const getLowestPrice = key => prices =>
    prices.reduce(
        (lowest, price) =>
            lowest && parseFloat(lowest[key]) <= parseFloat(price[key]) ? lowest : price,
        undefined,
    );

export const getHighestPrice = key => prices =>
    prices.reduce(
        (highest, price) =>
            highest && parseFloat(highest[key]) > parseFloat(price[key]) ? highest : price,
        undefined,
    );
