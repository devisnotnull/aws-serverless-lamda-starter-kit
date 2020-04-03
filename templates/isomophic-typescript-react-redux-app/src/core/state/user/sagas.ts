import { put, all, takeEvery, call } from 'redux-saga/effects';

import { IUser } from '@core/models/user';

import { fetchAllUsersRequest, fetchAllUsersSucess } from './actions';
import { get } from '../utils';
import { FETCH_ALL, FetchAllAction } from './types';
import { IPayload, RestGeneratorReturnType } from '../types';

// Saga calls to apollo

export function* fetchAllStart({ request }: FetchAllAction): RestGeneratorReturnType<IUser[]> {
    try {
        const data: IPayload<IUser[]> = yield call(get, request);
        yield put(fetchAllUsersSucess(data.data));
    } catch (ex) {
        console.log('[Critical Error]: Unable to perform network action with error ', ex);
    }
}

// Functional proxy calls

export function* fetchAllSaga() {
    yield fetchAllStart(fetchAllUsersRequest() as FetchAllAction);
}

// Listener generator funtions

export function* userSagas() {
    yield all([fetchAllSaga(), takeEvery(FETCH_ALL, fetchAllSaga)]);
}
