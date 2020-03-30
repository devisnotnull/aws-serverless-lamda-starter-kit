import fetch from 'isomorphic-fetch';
import { all, setContext } from 'redux-saga/effects';

import { IConfig } from '../models/config';
import { initializeApolloClient } from './apollo';
import { postSagas } from './post/sagas';

export default function* rootSaga(config: Partial<IConfig>) {
    try {
        yield all([postSagas()]);
        yield setContext({
            client: initializeApolloClient(
                fetch,
                config?.graphql ?? '',
                !config.isBrowser ?? false,
                false,
            ),
        });
    } catch (e) {
        console.error('We have encountered an error');
        console.error(e);
    }
}
