import { combineReducers } from 'redux'
import { networkReducer } from 'redux-saga-requests'
import { routerReducer } from 'react-router-redux'

import { IState } from './state'
import post from './post/reducer'
import layout from './layout/reducer'
import config from './config/reducer'

export default combineReducers<IState>({
    layout,
    config,
    post,
    //
    network: routerReducer,
    router: networkReducer({}),
})
