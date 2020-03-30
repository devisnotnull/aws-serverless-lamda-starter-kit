import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-graphql';
import { all } from 'redux-saga/effects';

import { IAppConfig } from '../models/config';
import { postSagas } from './post/sagas';

function* onRequestSaga(request: unknown, action: unknown) {
    console.log('action', action);
    return request;
}

function* onSuccessSaga(response: unknown, action: unknown) {
    return response;
}

function* onErrorSaga(error: unknown, action: unknown) {
    console.error('There has been an action error, ', error);
    console.error('Failed action, ', action);
    return { error };
}

function* onAbortSaga(action: unknown) {
    console.error('Action has been aborted');
}

export default function* rootSaga(config: Partial<IAppConfig>) {
    try {
        yield all([
            createRequestInstance({
                driver: createDriver({ url: config?.graphql ?? '' }),
                onAbort: onAbortSaga,
                onError: onErrorSaga,
                onRequest: onRequestSaga,
                onSuccess: onSuccessSaga,
            }),
            watchRequests(),
            postSagas(),
        ]);
    } catch (e) {
        console.error('We have encountered an error');
        console.error(e);
    }
}
