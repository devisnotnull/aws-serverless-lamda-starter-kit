import { put, all, takeEvery, call } from 'redux-saga/effects';
import { success } from 'redux-saga-requests';

import {
    fetchAllPostsRequest,
    fetchAllPostsSucess,
    fetchByIdPostsRequest,
    fetchByIdPostsSuccess,
} from './actions';

import { IPostSingularResponsePayload, IPostArrayResponsePayload } from '@core/models/post';
import { fetch, IPayload, GraphQlGeneratorReturnType } from '../utils';
import { CREATE_POST, FETCH_ALL_START, FetchAllAction, FetchByIdAction } from './types';

// Saga calls to apollo

export function* fetchAllStart({
    request: { query, variables },
}: FetchAllAction): GraphQlGeneratorReturnType<IPayload<IPostArrayResponsePayload>> {
    try {
        const data: IPayload<IPostArrayResponsePayload> = yield call(fetch, query, variables);
        yield put(fetchAllPostsSucess(data.data));
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action with error ', ex);
    }
}

export function* fetchByIdStart({
    request: { query, variables },
}: FetchByIdAction): GraphQlGeneratorReturnType<IPayload<IPostSingularResponsePayload>> {
    try {
        const data: IPayload<IPostSingularResponsePayload> = yield call(fetch, query, variables);
        yield put(fetchByIdPostsSuccess(data.data));
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action with error ', ex);
    }
}

// Functional proxy calls

export function* fetchAllSaga(page?: number, limit?: number) {
    yield put(fetchAllPostsRequest(page, limit));
}

export function* fetchById(id: number) {
    yield put(fetchByIdPostsRequest(id));
}

// Listener generator funtions

export function* postSagas() {
    yield all([
        takeEvery(FETCH_ALL_START, fetchAllStart),
        takeEvery(success(CREATE_POST), fetchAllSaga),
    ]);
}
