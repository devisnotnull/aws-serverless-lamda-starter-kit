import { IPageQueryOptionsInput, ICreatePostInput } from './query';

import { IRequestAction, IGraphqlResponseAction, IGraphqlQuery } from '../utils';
import { IPostArrayResponsePayload, IPostSingularResponsePayload } from '@core/models/post';

// Declare our action's
// We use the library `redux-saga-requests` to automagically configure graphql here.
// We declare our base action and then the success, error and abort actions.
export const CREATE_POST = '@post/CREATE_POST';
export const CREATE_POST_SUCCESS = '@post/CREATE_POST_SUCCESS'; // success(CREATE_POST) 'redux-saga-requests'
export const CREATE_POST_ERROR = '@post/CREATE_POST_ERROR'; // error(CREATE_POST) 'redux-saga-requests'
export const CREATE_POST_ABORT = '@post/CREATE_POST_ABORT'; // abort(CREATE_POST) 'redux-saga-requests'

export const DELETE_POST = '@post/DELETE_POST';
export const DELETE_POST_SUCCESS = '@post/DELETE_POST_SUCCESS'; // success(DELETE_POST) 'redux-saga-requests'
export const DELETE_POST_ERROR = '@post/DELETE_POST_ERROR'; // error(DELETE_POST) 'redux-saga-requests'
export const DELETE_POST_ABORT = '@post/DELETE_POST_ABORT'; // abort(DELETE_POST) 'redux-saga-requests'

export const FETCH_ALL_START = '@post/FETCH_ALL_START';
export const FETCH_ALL_START_SUCCESS = '@post/FETCH_ALL_START_SUCCESS'; // success(FETCH_ALL_START) 'redux-saga-requests'
export const FETCH_ALL_START_ERROR = '@post/FETCH_ALL_START_ERROR'; // error(FETCH_ALL_START) 'redux-saga-requests'
export const FETCH_ALL_START_ABORT = '@post/FETCH_ALL_START_ABORT'; // abort(FETCH_ALL_START) 'redux-saga-requests'

export const FETCH_BY_ID_START = '@post/FETCH_BY_ID_START';
export const FETCH_BY_ID_START_SUCCESS = '@post/FETCH_BY_ID_START_SUCCESS'; // success(FETCH_BY_ID_START) 'redux-saga-requests'
export const FETCH_BY_ID_START_ERROR = '@post/FETCH_BY_ID_START_ERROR'; // error(FETCH_BY_ID_START) 'redux-saga-requests'
export const FETCH_BY_ID_START_ABORT = '@post/FETCH_BY_ID_START_ABORT'; // abort(FETCH_BY_ID_START) 'redux-saga-requests'

// You can use the provided IResponseAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type FetchAllAction = IRequestAction<
    typeof FETCH_ALL_START,
    IGraphqlQuery<IPageQueryOptionsInput>
>;
export type FetchAllSucessAction = IGraphqlResponseAction<
    typeof FETCH_ALL_START_SUCCESS,
    IPostArrayResponsePayload
>;
export type FetchAllErrorAction = IGraphqlResponseAction<typeof FETCH_ALL_START_ERROR, any>;
export type FetchAllAbortAction = IGraphqlResponseAction<typeof FETCH_ALL_START_ABORT, any>;
export type FetchAllActionTypes =
    | FetchAllAction
    | FetchAllSucessAction
    | FetchAllErrorAction
    | FetchAllAbortAction;

export type FetchByIdAction = IRequestAction<
    typeof FETCH_BY_ID_START,
    IGraphqlQuery<{ id: number }>
>;
export type FetchByIdSucessAction = IGraphqlResponseAction<
    typeof FETCH_BY_ID_START_SUCCESS,
    IPostSingularResponsePayload
>;
export type FetchByIdErrorAction = IGraphqlResponseAction<typeof FETCH_BY_ID_START_ERROR, any>;
export type FetchByIdAbortAction = IGraphqlResponseAction<typeof FETCH_BY_ID_START_ABORT, any>;
export type FetchByIdActionTypes =
    | FetchByIdAction
    | FetchByIdSucessAction
    | FetchByIdErrorAction
    | FetchByIdAbortAction;

export type CreateAction = IRequestAction<typeof CREATE_POST, IGraphqlQuery<ICreatePostInput>>;
export type CreateActionSucessPayload = IGraphqlResponseAction<typeof CREATE_POST_SUCCESS, any>;
export type CreateActionErrorPayload = IGraphqlResponseAction<typeof CREATE_POST_ERROR, any>;
export type CreateActionAbortPayload = IGraphqlResponseAction<typeof CREATE_POST_ABORT, any>;
export type CreateActionTypes =
    | CreateAction
    | CreateActionSucessPayload
    | CreateActionErrorPayload
    | CreateActionAbortPayload;

export type DeleteAction = IRequestAction<typeof DELETE_POST, IGraphqlQuery<{ id: number }>>;
export type DeleteActionSucessPayload = IGraphqlResponseAction<typeof DELETE_POST_SUCCESS, any>;
export type DeleteActionErrorPayload = IGraphqlResponseAction<typeof DELETE_POST_ERROR, any>;
export type DeleteActionAbortPayload = IGraphqlResponseAction<typeof DELETE_POST_ABORT, any>;
export type DeleteActionTypes =
    | DeleteAction
    | DeleteActionSucessPayload
    | DeleteActionErrorPayload
    | DeleteActionAbortPayload;

export type ActionTypes =
    | FetchAllActionTypes
    | FetchByIdActionTypes
    | CreateActionTypes
    | DeleteActionTypes;
