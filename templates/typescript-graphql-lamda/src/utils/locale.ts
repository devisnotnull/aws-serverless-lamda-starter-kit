import { CloudFrontRequest } from 'aws-lambda';
import { pipe, prop, pickAll, applySpec } from 'ramda';

const channelHeader = 'x-group-channel';
const deviceHeader = 'x-group-device-type';
const localeHeader = 'x-group-locale';
const brandHeader = 'x-group-brand';

export interface IBrandLocaleHeader {
    channel: string;
    locale: string;
    device: string;
    brand: string;
}

export const processBrandAndLocale = (event: CloudFrontRequest): IBrandLocaleHeader =>
    pipe(
        prop('headers'),
        pickAll([channelHeader, deviceHeader, localeHeader, brandHeader]),
        applySpec({
            channel: prop<string, string>(channelHeader),
            locale: prop<string, string>(localeHeader),
            device: prop<string, string>(deviceHeader),
            brand: prop<string, string>(brandHeader),
        }),
    )(event);
