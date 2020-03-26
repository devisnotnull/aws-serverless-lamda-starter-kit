import { Reducer, AnyAction } from 'redux'

import { ILayoutState, initialState } from './state'
import { LayoutActionTypes } from './actions'

export const layoutReducer: Reducer<ILayoutState> = (
    state: ILayoutState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case LayoutActionTypes.UPDATE_BREADCRUM: {
            return { ...state, breadcrumb: action.payload }
        }
        case LayoutActionTypes.SHOW_MODAL:
            return {
                ...state,
                modal: {
                    isVisible: true
                }
            };
        case LayoutActionTypes.HIDE_MODAL:
            return {
                ...state,
                modal: {
                    isVisible: false
                }
            };
        default: {
            return state
        }
    }
}

export default layoutReducer
