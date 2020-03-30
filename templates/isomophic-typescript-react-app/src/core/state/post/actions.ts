import { fetchPostsByIdQuery, fetchPostsQuery, createPost } from './query';

import { ActionTypes, FETCH_ALL_START, FETCH_BY_ID_START, CREATE_POST, FETCH_ALL_START_SUCCESS, FETCH_BY_ID_START_SUCCESS, CREATE_POST_SUCCESS } from './types';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './const';
import { IPostArrayResponsePayload, IPostSingularResponsePayload } from '@core/models/post';

//

export const fetchAllPostsRequest = (
    page = DEFAULT_PAGE,
    limit = DEFAULT_PER_PAGE
): ActionTypes => ({
    type: FETCH_ALL_START,
    request: {
        query: fetchPostsQuery,
        variables: {
            options: {
                paginate: { page, limit },
            },
        },
    },
});

export const fetchAllPostsSucess = (data: IPostArrayResponsePayload): ActionTypes => ({
    type: FETCH_ALL_START_SUCCESS,
    data
});

//

export const fetchByIdPostsRequest = (id: number): ActionTypes => ({
    type: FETCH_BY_ID_START,
    request: {
        query: fetchPostsByIdQuery,
        variables: { id },
    },
});

export const fetchByIdPostsSuccess = (data: IPostSingularResponsePayload): ActionTypes => ({
    type: FETCH_BY_ID_START_SUCCESS,
    data
});

//

export const createPostsRequest = (postInput: any): ActionTypes => ({
    type: CREATE_POST,
    request: {
        query: createPost,
        variables: {
            input: postInput,
        },
    },
});

export const createPostsRequestSuccess = (data: IPostSingularResponsePayload): ActionTypes => ({
    type: CREATE_POST_SUCCESS,
    data
});
