// Action based call

import { DocumentNode } from "graphql";
import { getContext, call } from "redux-saga/effects";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import { IPayload } from './types';

// We have bound apollo client as a context in redux saga.
// https://github.com/apollographql/apollo-client/issues/2593
// We can use the inbuild apollo client hooks or use redux still

export function* fetch<V, R>(
    query: string | DocumentNode,
    variables: V
) {
    const client: ApolloClient<any> = yield getContext('client');
    const data: IPayload<R> = yield call(
        client.query,
        {
            query: gql`
                ${query}
            `,
            variables,
        }
    );
    return data;
}