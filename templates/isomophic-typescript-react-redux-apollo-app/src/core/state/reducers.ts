import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import config from './config/reducer';
import layout from './layout/reducer';
import { IState } from './state';

export default combineReducers<IState>({
    config,
    layout,
    router: routerReducer,
});
