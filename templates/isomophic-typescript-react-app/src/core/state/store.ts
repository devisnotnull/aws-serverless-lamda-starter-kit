import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSaga, { END, SagaMiddleware, Saga } from 'redux-saga'

import reducers from './reducers'

export default (history: any = undefined, reduxState: any = undefined) => {
    // Create our store
    const saga: SagaMiddleware = createSaga()
    const router = routerMiddleware(history)

    // Create Saga middleware
    const enhancer = composeWithDevTools(applyMiddleware(saga, router))

    // Create our store
    const store: Store = createStore(reducers, reduxState, enhancer)

    // TODO: This needs to be properly types
    ;(store as any).runSaga = (initSaga: Saga, params: any) => saga.run(initSaga, params)
    ;(store as any).closeSagas = () => store.dispatch(END)

    // TODO: Cleanup
    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        ;(module as any).hot.accept('./reducers', () => {
            const nextReducers = require('./reducers')
            const rootReducer = combineReducers({
                ...nextReducers,
                router: routerReducer,
            })
            store.replaceReducer(rootReducer)
        })
    }

    return store
}
