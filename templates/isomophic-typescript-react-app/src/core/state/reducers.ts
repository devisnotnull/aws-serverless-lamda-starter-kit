import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import layout from './layout/reducer';
import post from './post/reducer';
import { IState } from './state';

export default combineReducers<IState>({
    config,
    layout,
    post,
    router: routerReducer,
});