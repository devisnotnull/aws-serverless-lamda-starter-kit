import { Reducer } from 'redux';

import { ActionTypes, SHOW_MODAL, HIDE_MODAL } from './types';

import { ILayoutState, initialState } from './state';

export const layoutReducer: Reducer<ILayoutState> = (
    state: ILayoutState = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                modal: {
                    isVisible: true,
                },
            };
        case HIDE_MODAL:
            return {
                ...state,
                modal: {
                    isVisible: false,
                },
            };
        default: {
            return state;
        }
    }
};

export default layoutReducer;
