import { all, setContext } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { IConfig } from '../models/config';
import { postSagas } from './post/sagas';
import { initializeApolloClient } from './apollo';


export default function* rootSaga(config: Partial<IConfig>) {
    try {
        yield setContext({ 
            client: initializeApolloClient(fetch, config?.graphql ?? '', !config.isBrowser ?? false, false) 
        }),
        yield all([
            postSagas(),
        ]);
    } catch (e) {
        console.error('We have encountered an error');
        console.error(e);
    }
}
