import { fetchPostsByIdQuery, fetchPostsQuery, createPost, deletePost } from './query';

import { ActionTypes, FETCH_ALL_START, FETCH_BY_ID_START, CREATE_POST, DELETE_POST } from './types';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './const';

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

export const fetchByIdPostsRequest = (id: number): ActionTypes => ({
    type: FETCH_BY_ID_START,
    request: {
        query: fetchPostsByIdQuery,
        variables: { id },
    },
});

export const createPostsRequest = (postInput: any): ActionTypes => ({
    type: CREATE_POST,
    request: {
        query: createPost,
        variables: {
            input: postInput,
        },
    },
});

export const deletePostRequest = (postId: number): ActionTypes => ({
    type: DELETE_POST,
    request: {
        query: deletePost,
        variables: {
            id: postId,
        },
    },
});
