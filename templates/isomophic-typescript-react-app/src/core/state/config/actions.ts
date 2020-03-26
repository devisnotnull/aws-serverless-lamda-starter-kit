import { Action } from 'redux-actions'

export enum LayoutActionTypes {
    TOGGLE_FEATURE = '@config/TOGGLE_FEATURE',
}

export const toggleFeature = (toggle?: boolean): Action<boolean | undefined> => {
    return {
        type: LayoutActionTypes.TOGGLE_FEATURE,
        payload: toggle,
    }
}
