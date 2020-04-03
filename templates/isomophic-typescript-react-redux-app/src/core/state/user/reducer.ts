import { Reducer } from 'redux';
import { UNABLE_TO_LOAD_ERROR } from '../consts';

import { ActionTypes, FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_ERROR } from './types';

import { IUserState, initialState } from './state';

export const postReducers: Reducer<IUserState> = (
    state: IUserState = initialState,
    action: ActionTypes
): IUserState => {
    switch (action.type) {
        //
        // Base action: FETCH_ALL
        //
        case FETCH_ALL: {
            return { ...state, loading: true, errors: undefined };
        }
        case FETCH_ALL_SUCCESS: {
            const payload = action.data ?? undefined;
            return {
                ...state,
                loading: false,
                errors: payload ? undefined : UNABLE_TO_LOAD_ERROR,
                users: payload ?? [],
            };
        }
        case FETCH_ALL_ERROR: {
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
