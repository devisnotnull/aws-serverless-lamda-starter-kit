import { put, all, takeEvery } from 'redux-saga/effects';
import { success } from 'redux-saga-requests';

import { CREATE_POST, DELETE_POST } from './types';
import { fetchAllPostsRequest } from './actions';

export function* fetchAllSaga(page?: number, limit?: number) {
    yield put(fetchAllPostsRequest(page, limit));
}

export function* postCreateSucess() {
    yield takeEvery(success(CREATE_POST), fetchAllSaga);
}

export function* postDeleteSucess() {
    yield takeEvery(success(DELETE_POST), fetchAllSaga);
}

export function* postSagas() {
    yield all([postCreateSucess(), postDeleteSucess()]);
}
