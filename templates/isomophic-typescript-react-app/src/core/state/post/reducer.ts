import { Reducer } from 'redux';
import { UNABLE_TO_LOAD_ERROR } from '../consts';

import {
    ActionTypes,
    FETCH_ALL,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_ERROR,
    FETCH_BY_ID,
    FETCH_BY_ID_SUCCESS,
    FETCH_BY_ID_ERROR,
} from './types';

import { IPostState, initialState } from './state';

export const postReducers: Reducer<IPostState> = (
    state: IPostState = initialState,
    action: ActionTypes
): IPostState => {
    switch (action.type) {
        //
        // Base action: FETCH_ALL
        //
        case FETCH_ALL: {
            return { ...state, loading: true, errors: undefined };
        }
        case FETCH_ALL_SUCCESS: {
            const payload = action.data?.posts ?? undefined;
            return {
                ...state,
                loading: false,
                errors: payload ? undefined : UNABLE_TO_LOAD_ERROR,
                total: payload?.meta?.totalCount ?? 0,
                posts: payload?.data ?? [],
            };
        }
        case FETCH_ALL_ERROR: {
            return { ...state, loading: false, errors: UNABLE_TO_LOAD_ERROR };
        }
        //
        // Base action: FETCH_BY_ID
        //
        case FETCH_BY_ID: {
            return { ...state, loading: true, errors: undefined };
        }
        case FETCH_BY_ID_SUCCESS: {
            const payload = action.data?.post ?? undefined;
            return {
                ...state,
                loading: false,
                errors: payload ? undefined : UNABLE_TO_LOAD_ERROR,
                ...payload,
            };
        }
        case FETCH_BY_ID_ERROR: {
            return { ...state, loading: false, errors: UNABLE_TO_LOAD_ERROR };
        }
        //
        //
        //
        default: {
            return state;
        }
    }
};

export default postReducers;
