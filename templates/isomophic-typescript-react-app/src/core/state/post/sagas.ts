import { put, all, takeEvery, call } from 'redux-saga/effects';

import { IPostSingularResponsePayload, IPostArrayResponsePayload } from '@core/models/post';

import { fetchAllPostsRequest, fetchAllPostsSucess, fetchByIdPostsSuccess } from './actions';

import { IPayload, GraphQlGeneratorReturnType } from '../types';
import { fetch } from '../utils';
import { FETCH_ALL, FetchAllAction, FetchByIdAction } from './types';

// Saga calls to apollo

export function* fetchAllStart({
    request: { query, variables },
}: FetchAllAction): GraphQlGeneratorReturnType<IPostArrayResponsePayload> {
    try {
        const data: IPayload<IPostArrayResponsePayload> = yield call(fetch, query, variables);
        yield put(fetchAllPostsSucess(data.data));
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action with error ', ex);
    }
}

export function* fetchByIdStart({
    request: { query, variables },
}: FetchByIdAction): GraphQlGeneratorReturnType<IPostSingularResponsePayload> {
    try {
        const data: IPayload<IPostSingularResponsePayload> = yield call(fetch, query, variables);
        yield put(fetchByIdPostsSuccess(data.data));
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action with error ', ex);
    }
}

// Functional proxy calls

export function* fetchAllSaga(page?: number, limit?: number) {
    yield fetchAllStart(fetchAllPostsRequest() as FetchAllAction);
}

// Listener generator funtions

export function* postSagas() {
    yield all([fetchAllSaga(), takeEvery(FETCH_ALL, fetchAllSaga)]);
}
