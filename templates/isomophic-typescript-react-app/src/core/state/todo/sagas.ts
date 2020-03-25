import { put, all, takeEvery } from 'redux-saga/effects'
import { success } from 'redux-saga-requests'

import { OptionGroupActionTypes, fetchAllOptionGroupsRequest } from './actions'

function* fetchAllSaga() {
    yield put(fetchAllOptionGroupsRequest())
}

export function* optionGroupCreateSucess() {
    yield takeEvery(success(OptionGroupActionTypes.CREATE_OPTION_GROUP), fetchAllSaga)
}

export function* optionGroupSagas() {
    yield all([optionGroupCreateSucess()])
}
