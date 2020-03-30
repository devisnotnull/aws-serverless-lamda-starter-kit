// Action based call

import ApolloClient from 'apollo-client';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { call, CallEffect, getContext, PutEffect } from 'redux-saga/effects';
import { ActionTypes } from './post/types';

// We have bound apollo client as a context in redux saga.
// https://github.com/apollographql/apollo-client/issues/2593
// We can use the inbuild apollo client hooks or use redux still

export interface IPayload<T> {
    data: T;
}

export type GraphQlReturnType<T> = Generator<
    CallEffect<IPayload<unknown>> | PutEffect<ActionTypes>,
    void,
    T
>;

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
