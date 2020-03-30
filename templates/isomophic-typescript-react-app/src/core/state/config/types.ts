import { IResponseAction } from '../types';

export const TOGGLE_FEATURE = '@config/TOGGLE_FEATURE';

// You can use the provided IResponseAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type ToggleFeatureAction = IResponseAction<
    typeof TOGGLE_FEATURE,
    { feature: string; toggle: boolean }
>;

export type ActionTypes = ToggleFeatureAction;
