import { get } from 'config';
import { DynamoDB, config } from 'aws-sdk';

import { isEmpty, mergeDeepRight } from 'ramda';
import { pipe } from 'ramda';

const { NotFoundError } = require('./errors');

const errorHandler = (logger, ctx) => error => {
    const { stack, message } = error;
    logger.error({ request_id: ctx.state.incomingRequestId, stack_trace: stack }, `${message}`);
    if (error instanceof NotFoundError) return ctx.throw(404, message);
    return ctx.throw(500, message);
};

const setBody = ctx => data => {
    ctx.body = data;
    return ctx;
};

export const getAll = (db, logger) => async ctx => {
    const handleError = errorHandler(logger, ctx);
    const result = await db.read();
    return result;
};

export const getById = (db, logger) => async ctx => {
    const { id } = ctx.params;
    const handleError = errorHandler(logger, ctx);

    const result = await db.readById(id);

    return result;
};

const getByKey = (client, params) => async (babelId, brandLocale, extraParams = {}) => {
    const enhancedParams = mergeDeepRight(params, extraParams);

    try {
        const data = await client
            .get({ Key: { babelId, brandLocale }, ...enhancedParams })
            .promise();

        if (isEmpty(data)) {
            return new NotFoundError();
        }
        return data.Item;
    } catch (err) {
        return err;
    }
};

const query = (client, params) => async extraParams => {
    try {
        const enhancedParams = mergeDeepRight(params, extraParams);
        const data = await client.get(enhancedParams).promise();

        if (isEmpty(data)) {
            return new NotFoundError();
        }
        return data.Item;
    } catch (err) {
        return err;
    }
};

const upsert = (client, params) => async Item => {
    try {
        await client.put({ ...params, Item }).promise();
        return Item;
    } catch (e) {
        return e;
    }
};

const db = (client, params) => ({
    getByKey: getByKey(client, params),
    getById: getById(client, params),
    getAll: getAll(client, params),
    query: query(client, params),
    upsert: upsert(client, params),
});

export const getClient = tableName => {
    const isLocal = get('isLocal');
    const isOffline = get('isOffline');
    const { endpoint } = get('aws.dynamoDb');
    const params = { TableName: tableName };

    const dynamoParams = isLocal || isOffline ? { endpoint } : {};

    config.update({ region: get('aws.region') });
    return db(new DynamoDB.DocumentClient(dynamoParams), params);
};

export default getClient;
