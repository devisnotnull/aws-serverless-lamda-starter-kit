import { put, all, takeEvery } from 'redux-saga/effects';
import { success } from 'redux-saga-requests';
import { call, getContext } from 'redux-saga/effects';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';

import { CREATE_POST, FETCH_ALL_START, FetchAllAction, FetchByIdAction } from './types';
import { fetchAllPostsRequest, fetchAllPostsSucess, fetchByIdPostsRequest } from './actions';
import { IPostArrayResponsePayload } from '@core/models/post';

// Functional proxy call

export function* fetchAllSaga(page?: number, limit?: number) {
    yield put(fetchAllPostsRequest(page, limit));
}

export function* fetchById(id: number) {
    yield put(fetchByIdPostsRequest(id));
}

// Action based call

// We have bound apollo clien as a context in redux saga.
// https://github.com/apollographql/apollo-client/issues/2593

export function* fetchAllStart({ request: { query, variables }}: FetchAllAction) {
    const client: ApolloClient<any> = yield getContext('client');
    try {
        const data: { data : IPostArrayResponsePayload } = yield call(
            client.query, 
            {
                query: gql`${query}`,
                variables: variables,
            }
        );
        yield put(fetchAllPostsSucess(data.data))
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action', ex)
    }
}

export function* fetchByIdStart({ request: { query, variables }}: FetchByIdAction) {
    const client: ApolloClient<any> = yield getContext('client');
    try {
        const data: { data : IPostArrayResponsePayload } = yield call(
            client.query, 
            {
                query: gql`${query}`,
                variables: variables,
            }
        );
        yield put(fetchAllPostsSucess(data.data))
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action', ex)
    }
}

// Listener generator funtions

export function* postSagas() {
    yield all(
        [
            takeEvery(FETCH_ALL_START, fetchAllStart),
            takeEvery(success(CREATE_POST), fetchAllSaga),
        ]
    )
}
