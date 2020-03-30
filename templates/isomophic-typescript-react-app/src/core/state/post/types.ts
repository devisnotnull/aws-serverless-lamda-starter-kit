import { IRequestAction, IGraphqlResponseAction, IGraphqlQuery } from '../types';
import { IPostArrayResponsePayload, IPostSingularResponsePayload } from '@core/models/post';

// Graphql input interfaces
export interface IPageQueryOptionsInput {
    options: {
        paginate: {
            page: number;
            limit: number;
        };
    };
}

export interface ICreatePostInput {
    input: {
        id: string;
        title: string;
        body: string;
    };
}

// Declare our action's
// We use the library `redux-saga-requests` to automagically configure graphql here.
// We declare our base action and then the success, error and abort actions.
export const CREATE_POST = '@post/CREATE_POST';
export const CREATE_POST_SUCCESS = '@post/CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = '@post/CREATE_POST_ERROR';
export const CREATE_POST_ABORT = '@post/CREATE_POST_ABORT';

export const FETCH_ALL_START = '@post/FETCH_ALL_START';
export const FETCH_ALL_START_SUCCESS = '@post/FETCH_ALL_START_SUCCESS'; 
export const FETCH_ALL_START_ERROR = '@post/FETCH_ALL_START_ERROR'; 
export const FETCH_ALL_START_ABORT = '@post/FETCH_ALL_START_ABORT'; 

export const FETCH_BY_ID_START = '@post/FETCH_BY_ID_START';
export const FETCH_BY_ID_START_SUCCESS = '@post/FETCH_BY_ID_START_SUCCESS';
export const FETCH_BY_ID_START_ERROR = '@post/FETCH_BY_ID_START_ERROR';
export const FETCH_BY_ID_START_ABORT = '@post/FETCH_BY_ID_START_ABORT';

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
export type FetchAllActionTypes =
    | FetchAllAction
    | FetchAllSucessAction
    | FetchAllErrorAction

export type FetchByIdAction = IRequestAction<
    typeof FETCH_BY_ID_START,
    IGraphqlQuery<{ id: number }>
>;
export type FetchByIdSucessAction = IGraphqlResponseAction<
    typeof FETCH_BY_ID_START_SUCCESS,
    IPostSingularResponsePayload
>;
export type FetchByIdErrorAction = IGraphqlResponseAction<typeof FETCH_BY_ID_START_ERROR, any>;
export type FetchByIdActionTypes =
    | FetchByIdAction
    | FetchByIdSucessAction
    | FetchByIdErrorAction

export type CreateAction = IRequestAction<typeof CREATE_POST, IGraphqlQuery<ICreatePostInput>>;
export type CreateActionSucessPayload = IGraphqlResponseAction<typeof CREATE_POST_SUCCESS, any>;
export type CreateActionErrorPayload = IGraphqlResponseAction<typeof CREATE_POST_ERROR, any>;
export type CreateActionTypes =
    | CreateAction
    | CreateActionSucessPayload
    | CreateActionErrorPayload

export type ActionTypes =
    | FetchAllActionTypes
    | FetchByIdActionTypes
    | CreateActionTypes

