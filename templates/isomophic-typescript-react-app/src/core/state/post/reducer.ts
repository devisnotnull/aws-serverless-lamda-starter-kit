import { Reducer, AnyAction } from 'redux'
import { success, error, abort } from 'redux-saga-requests'

import { PostActionTypes } from './actions'
import { IPostState, initialState } from './state'

export const postReducer: Reducer<IPostState> = (
    state: IPostState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case PostActionTypes.FETCH_ALL_START: {
            return { ...state, loading: true, errors: undefined }
        }
        case success(PostActionTypes.FETCH_ALL_START): {
            return {
                ...state,
                loading: false,
                errors: undefined,
                total: action?.data?.meta?.totalCount ?? 0,
                data: action?.data?.posts?.data ?? [],
            }
        }
        case error(PostActionTypes.FETCH_ALL_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case abort(PostActionTypes.FETCH_ALL_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case PostActionTypes.FETCH_BY_ID_START: {
            return { ...state, loading: true, errors: undefined }
        }
        case success(PostActionTypes.FETCH_BY_ID_START): {
            return {
                ...state,
                loading: false,
                errors: undefined,
                ...action.data,
            }
        }
        case error(PostActionTypes.FETCH_BY_ID_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        case abort(PostActionTypes.FETCH_BY_ID_START): {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

export default postReducer
