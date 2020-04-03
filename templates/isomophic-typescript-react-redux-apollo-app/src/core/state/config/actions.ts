import { ActionTypes, TOGGLE_FEATURE } from './types';

export const toggleFeature = (feature: string, toggle: boolean): ActionTypes => ({
    type: TOGGLE_FEATURE,
    payload: {
        feature,
        toggle,
    },
});
