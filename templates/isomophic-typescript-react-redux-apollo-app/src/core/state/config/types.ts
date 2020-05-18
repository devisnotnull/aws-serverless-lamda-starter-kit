import { IAction } from '../types';

export const TOGGLE_FEATURE = '@config/TOGGLE_FEATURE';

// You can use the provided IAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type ToggleFeatureAction = IAction<
    typeof TOGGLE_FEATURE,
    { feature: string; toggle: boolean }
>;

export type ActionTypes = ToggleFeatureAction;
