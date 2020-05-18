/// <reference path="../../typings/index.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { ApolloProvider } from 'react-apollo'

import { initializeApolloClient } from '@core/state/apollo';
import createStore from '@core/state/store';
import App from '@core/web/app';

import { IState } from '@core/state/state';
import ModalContainer from '@core/web/containers/modal/modal';

const preloadedState: IState = (window as any).__INITIAL_STATE__;

const history = createHistory();
const store = createStore(history, preloadedState);

const apolloCient = initializeApolloClient(
    fetch,
    preloadedState?.config?.config?.graphql ?? '',
    !preloadedState?.config?.config?.isBrowser ?? false,
    false
);

ReactDOM.render(
    <ApolloProvider client={apolloCient}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <ModalContainer />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
