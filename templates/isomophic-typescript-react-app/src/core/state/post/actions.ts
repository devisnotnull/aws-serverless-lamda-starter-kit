import {
    IPageQueryOptionsInput,
    ICreatePostInput,
    fetchPostsByIdQuery,
    fetchPostsQuery,
    createPost,
    deletePost,
} from './query'
import { IGraphqlActionQuery } from '../utils'
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './const';

export enum PostActionTypes {
    UPDATE_POST = '@post/UPDATE_POST',
    CREATE_POST = '@post/CREATE_POST',
    DELETE_POST = '@post/DELETE_POST',
    FETCH_ALL_START = '@post/FETCH_ALL_START',
    FETCH_BY_ID_START = '@post/FETCH_BY_ID_START',
}

export const fetchAllPostsRequest = (page = DEFAULT_PAGE, limit = DEFAULT_PER_PAGE): IGraphqlActionQuery<PostActionTypes, IPageQueryOptionsInput> => {
    return {
        type: PostActionTypes.FETCH_ALL_START,
        request: {
            query: fetchPostsQuery,
            variables: {
                options: {
                    paginate: { page, limit }
                }
            }
        }
    }
}

export const fetchByIdPostsRequest = (id: number): IGraphqlActionQuery<PostActionTypes, { id: number }> => {
    return {
        type: PostActionTypes.FETCH_BY_ID_START,
        request: {
            query: fetchPostsByIdQuery,
            variables: { id },
        },
    }
}

export const createPostsRequest = (postInput: any): IGraphqlActionQuery<PostActionTypes, ICreatePostInput> => {
    return {
        type: PostActionTypes.CREATE_POST,
        request: {
            query: createPost,
            variables: {
                input: postInput
            },
        },
    }
}

export const deletePostRequest = (postId: number): IGraphqlActionQuery<PostActionTypes, { id: number }> => {
    return {
        type: PostActionTypes.DELETE_POST,
        request: {
            query: deletePost,
            variables: {
                id: postId,
            },
        },
    }
}
