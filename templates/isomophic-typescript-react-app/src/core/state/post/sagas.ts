import { put, all, takeEvery } from 'redux-saga/effects'
import { success } from 'redux-saga-requests'

import { PostActionTypes, fetchAllPostsRequest } from './actions'

function* fetchAllSaga() {
    yield put(fetchAllPostsRequest())
}

export function* postCreateSucess() {
    yield takeEvery(success(PostActionTypes.CREATE_POST), fetchAllSaga)
}

export function* postDeleteSucess() {
    yield takeEvery(success(PostActionTypes.DELETE_POST), fetchAllSaga)
}

export function* postSagas() {
    yield all([postCreateSucess(), postDeleteSucess()])
}
