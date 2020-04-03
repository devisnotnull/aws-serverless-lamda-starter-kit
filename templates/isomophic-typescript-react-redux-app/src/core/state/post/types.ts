import { IPostArrayResponsePayload, IPostSingularResponsePayload } from '@core/models/post';

import { IRequestAction, IGraphqlResponseAction, IGraphqlQuery } from '../types';

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

// Declare our actions

export const FETCH_ALL = '@post/FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@post/FETCH_ALL_SUCCESS';
export const FETCH_ALL_ERROR = '@post/FETCH_ALL_ERROR';
export const FETCH_ALL_ABORT = '@post/FETCH_ALL_ABORT';

export const FETCH_BY_ID = '@post/FETCH_BY_ID';
export const FETCH_BY_ID_SUCCESS = '@post/FETCH_BY_ID_SUCCESS';
export const FETCH_BY_ID_ERROR = '@post/FETCH_BY_ID_ERROR';
export const FETCH_BY_ID_ABORT = '@post/FETCH_BY_ID_ABORT';

export const CREATE_POST = '@post/CREATE_POST';
export const CREATE_POST_SUCCESS = '@post/CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = '@post/CREATE_POST_ERROR';
export const CREATE_POST_ABORT = '@post/CREATE_POST_ABORT';

// You can use the provided IAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type FetchAllAction = IRequestAction<
    typeof FETCH_ALL,
    IGraphqlQuery<IPageQueryOptionsInput>
>;
export type FetchAllSucessAction = IGraphqlResponseAction<
    typeof FETCH_ALL_SUCCESS,
    IPostArrayResponsePayload
>;
export type FetchAllErrorAction = IGraphqlResponseAction<typeof FETCH_ALL_ERROR, any>;

export type FetchAllActionTypes = FetchAllAction | FetchAllSucessAction | FetchAllErrorAction;



export type FetchByIdAction = IRequestAction<typeof FETCH_BY_ID, IGraphqlQuery<{ id: number }>>;
export type FetchByIdSucessAction = IGraphqlResponseAction<
    typeof FETCH_BY_ID_SUCCESS,
    IPostSingularResponsePayload
>;
export type FetchByIdErrorAction = IGraphqlResponseAction<typeof FETCH_BY_ID_ERROR, any>;
export type FetchByIdActionTypes = FetchByIdAction | FetchByIdSucessAction | FetchByIdErrorAction;

export type CreateAction = IRequestAction<typeof CREATE_POST, IGraphqlQuery<ICreatePostInput>>;
export type CreateActionSucessPayload = IGraphqlResponseAction<typeof CREATE_POST_SUCCESS, any>;
export type CreateActionErrorPayload = IGraphqlResponseAction<typeof CREATE_POST_ERROR, any>;
export type CreateActionTypes = CreateAction | CreateActionSucessPayload | CreateActionErrorPayload;

export type ActionTypes = FetchAllActionTypes | FetchByIdActionTypes | CreateActionTypes;
