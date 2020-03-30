import { Reducer, AnyAction } from 'redux';

import { IAppConfig, initialState } from './state';

export const configReducer: Reducer<IAppConfig> = (
    state: IAppConfig = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export default configReducer;
