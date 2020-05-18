import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default (history: any = undefined, reduxState: any = undefined) => {
    // Create our store
    const router = routerMiddleware(history);
    // Create Saga middleware
    const enhancer = composeWithDevTools(applyMiddleware(router));
    // Create our store
    const store: Store = createStore(reducers, reduxState, enhancer);
    //
    return store;
};
