// Action based call

import { DocumentNode } from 'graphql';
import { getContext, call } from 'redux-saga/effects';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import axios from 'axios';

import { IPayload, IRestRequest } from './types';

/**
 * Graphql proxy call
 * @param query
 * @param variables
 */
export function* fetch<V, R>(query: string | DocumentNode, variables: V) {
    const client: ApolloClient<any> = yield getContext('client');
    const data: IPayload<R> = yield call(client.query, {
        query: gql`
            ${query}
        `,
        variables,
    });
    return data;
}

/**
 * Rest saga proxy
 * @param query
 */
export function* get<T>(query: IRestRequest) {
    const client: string = yield getContext('rest');
    const queryString = Object.keys(query.query)
        .map((key) => `${query.query}=${query.query[key] ?? ''}`)
        .join('&');
    const payload: IPayload<T> = yield call(axios.get, `${client}${query.path}?${queryString}`);
    return payload;
}
