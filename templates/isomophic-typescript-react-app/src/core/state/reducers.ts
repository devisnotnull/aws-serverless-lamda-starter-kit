import { combineReducers } from 'redux'
import { networkReducer } from 'redux-saga-requests'
import { routerReducer } from 'react-router-redux'

import { IState } from './state'
import optionGroups from './optionGroup/reducer'
import layout from './layout/reducer'

export default combineReducers<IState>({
    optionGroups,
    layout,
    network: routerReducer,
    router: networkReducer({}),
})
