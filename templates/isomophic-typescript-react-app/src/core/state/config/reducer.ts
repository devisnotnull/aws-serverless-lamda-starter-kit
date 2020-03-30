import { Reducer, AnyAction } from 'redux';

import { IIAppConfigState, initialState } from './state';

export const configReducer: Reducer<IIAppConfigState> = (
    state: IIAppConfigState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default configReducer;
