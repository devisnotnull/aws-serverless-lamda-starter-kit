import fetch from 'isomorphic-fetch';
import { all, setContext } from 'redux-saga/effects';

import { IConfig } from '../models/config';
import { initializeApolloClient } from './apollo';
import { postSagas } from './post/sagas';
import { userSagas } from './user/sagas';

export default function* rootSaga(config: Partial<IConfig>) {
    try {
        yield all([
            setContext({
                client: initializeApolloClient(
                    fetch,
                    config?.graphql ?? '',
                    !config.isBrowser ?? false,
                    false
                ),
                rest: config?.rest ?? '',
            }),
            postSagas(),
            userSagas(),
        ]);
    } catch (e) {
        console.error('We have encountered an error setting up the connte');
        console.error(e);
    }
}
