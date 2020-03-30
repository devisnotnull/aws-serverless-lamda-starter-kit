import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { networkReducer } from 'redux-saga-requests';

import config from './config/reducer';
import layout from './layout/reducer';
import post from './post/reducer';
import { IState } from './state';

export default combineReducers<IState>({
    config,
    layout,
    network: routerReducer,
    post,
    router: networkReducer({}),
});
