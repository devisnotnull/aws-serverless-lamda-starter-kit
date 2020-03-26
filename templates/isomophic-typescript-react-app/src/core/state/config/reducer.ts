import { Reducer, AnyAction } from 'redux'

import { IAppConfigState, initialState } from './state'

export const configReducer: Reducer<IAppConfigState> = (
    state: IAppConfigState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export default configReducer
