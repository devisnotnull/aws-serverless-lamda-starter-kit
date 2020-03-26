/// <reference path="../../typings/index.d.ts" />

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import rootSaga from '@core/state/sagas'
import createStore from '@core/state/store'
import App from '@core/web/app'

import { registerServiceWorker } from './serviceWorker'
import { IState } from '@core/state/state'
import { ModalWrapper } from '@core/web/containers/modal/modal'

const preloadedState: IState = (window as any).__INITIAL_STATE__

const history = createHistory()
const store = createStore(history, preloadedState)
;(store as any).rootTask = (store as any).runSaga(rootSaga, preloadedState?.config?.config ?? {})

registerServiceWorker()

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <ModalWrapper />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}

renderApp()
