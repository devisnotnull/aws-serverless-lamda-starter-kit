import { all } from 'redux-saga/effects'
import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-graphql'

import { postSagas } from './post/sagas'
import { AppConfig } from '@core/models/config'

function* onRequestSaga(request: unknown, action: unknown) {
    return request
}

function* onSuccessSaga(response: unknown, action: unknown) {
    return response
}

function* onErrorSaga(error: unknown, action: unknown) {
    console.error('There has been an action error, ', error)
    console.error('Failed action, ', action)
    return { error }
}

function* onAbortSaga(action: unknown) {
    console.error('Action has been aborted')
}

export default function* rootSaga(config: Partial<AppConfig>) {
    console.log('config, ', config);
    try {
        yield all([
            createRequestInstance({
                driver: createDriver({ url: config?.graphql ?? '' }), 
                onRequest: onRequestSaga,
                onSuccess: onSuccessSaga,
                onError: onErrorSaga,
                onAbort: onAbortSaga,
            }),
            watchRequests(),
            postSagas(),
        ])
    } catch (e) {
        console.error('We have encountered an error')
        console.error(e)
    }
}
