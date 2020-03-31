import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import layout from './layout/reducer';
import post from './post/reducer';
import user from './user/reducer';
import { IState } from './state';

export default combineReducers<IState>({
    config,
    layout,
    post,
    user,
    router: routerReducer,
});
