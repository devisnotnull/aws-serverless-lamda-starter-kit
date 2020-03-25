import { all } from 'redux-saga/effects'
import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-graphql'

import { optionGroupSagas } from './optionGroup/sagas'

function* onRequestSaga(request: unknown, action: unknown) {
    // do sth with you request, like add token to header, or dispatch some action etc.
    return request
}

function* onSuccessSaga(response: unknown, action: unknown) {
    // do sth with the response, dispatch some action etc
    return response
}

function* onErrorSaga(error: unknown, action: unknown) {
    // do sth here, like dispatch some action
    console.error('There has been an action error')
    // not related token error, we pass it like nothing happened
    return { error }
}

function* onAbortSaga(action: unknown) {
    // do sth, for example an action dispatch
    console.error('Action has been aborted')
}

export default function* rootSaga() {
    try {
        yield all([
            createRequestInstance({
                driver: createDriver({
                    url: 'http://localhost:3005/v2/graphql',
                }), // to derive from config
                onRequest: onRequestSaga,
                onSuccess: onSuccessSaga,
                onError: onErrorSaga,
                onAbort: onAbortSaga,
            }),
            watchRequests(),
            optionGroupSagas(),
        ])
    } catch (e) {
        console.error('We have encountered an error')
    }
}
