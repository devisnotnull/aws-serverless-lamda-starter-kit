import { IUser } from '@core/models/user';

import { IRequestAction, IRestRequest, IRestResponseAction } from '../types';

// Declare our actions
export const FETCH_ALL = '@user/FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@user/FETCH_ALL_SUCCESS';
export const FETCH_ALL_ERROR = '@user/FETCH_ALL_ERROR';
export const FETCH_ALL_ABORT = '@user/FETCH_ALL_ABORT';

// You can use the provided IAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type FetchAllAction = IRequestAction<typeof FETCH_ALL, IRestRequest>;
export type FetchAllSucessAction = IRestResponseAction<typeof FETCH_ALL_SUCCESS, IUser[]>;
export type FetchAllErrorAction = IRestResponseAction<typeof FETCH_ALL_ERROR, any>;
export type FetchAllActionTypes = FetchAllAction | FetchAllSucessAction | FetchAllErrorAction;

export type ActionTypes = FetchAllActionTypes;
