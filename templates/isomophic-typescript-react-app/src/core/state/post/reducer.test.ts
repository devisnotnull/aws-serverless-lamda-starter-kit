import { IPostState, initialState } from './state';
import { UNABLE_TO_LOAD_ERROR } from '../consts';
import {
    FetchAllSucessAction,
    FetchAllAction,
    FetchByIdAction,
    FetchByIdSucessAction,
    FETCH_ALL_START_SUCCESS,
    FETCH_ALL_START,
    FETCH_BY_ID_START,
    FETCH_BY_ID_START_SUCCESS,
} from './types';
import { postReducers } from './reducer';

describe('post reducers: FETCH_ALL_*', () => {
    let state: IPostState;

    beforeEach(() => {
        state = initialState;
    });

    describe('action: FetchByIdAction', () => {
        it('reducer: FetchByIdAction', () => {
            const fetchAllSucessAction: FetchByIdAction = {
                type: FETCH_BY_ID_START,
                request: {
                    query: '',
                    variables: {
                        id: 1,
                    },
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.post).toEqual(undefined);
            expect(reducerState.loading).toEqual(true);
            expect(reducerState.errors).toEqual(undefined);
        });
    });

    describe('action: FetchByIdSucessAction', () => {
        it('reducer: FetchByIdSucessAction', () => {
            const fetchAllSucessAction: FetchByIdSucessAction = {
                type: FETCH_BY_ID_START_SUCCESS,
                data: {
                    post: undefined,
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.post).toEqual(undefined);
            expect(reducerState.loading).toEqual(false);
            expect(reducerState.errors).toEqual(UNABLE_TO_LOAD_ERROR);
        });

        it('reducer: FetchAllSucessAction with empty non empty posts array', () => {
            const fetchAllSucessAction: FetchAllSucessAction = {
                type: FETCH_ALL_START_SUCCESS,
                data: {
                    posts: {
                        data: [
                            {
                                id: '1',
                                title: 'title',
                                body: 'body',
                            },
                        ],
                        meta: {},
                    },
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.posts).toEqual([
                {
                    id: '1',
                    title: 'title',
                    body: 'body',
                },
            ]);
            expect(reducerState.loading).toEqual(false);
            expect(reducerState.errors).toEqual(undefined);
        });
    });

    describe('action: FetchAllAction', () => {
        it('reducer: FetchAllAction', () => {
            const fetchAllSucessAction: FetchAllAction = {
                type: FETCH_ALL_START,
                request: {
                    query: '',
                    variables: {
                        options: {
                            paginate: {
                                page: 1,
                                limit: 1,
                            },
                        },
                    },
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.posts).toEqual([]);
            expect(reducerState.loading).toEqual(true);
            expect(reducerState.errors).toEqual(undefined);
        });
    });

    describe('action: FetchAllSucessAction', () => {
        it('reducer: FetchAllSucessAction with empty posts array', () => {
            const fetchAllSucessAction: FetchAllSucessAction = {
                type: FETCH_ALL_START_SUCCESS,
                data: {
                    posts: {
                        data: [],
                        meta: {},
                    },
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.posts).toEqual([]);
            expect(reducerState.loading).toEqual(false);
            expect(reducerState.errors).toEqual(undefined);
        });

        it('reducer: FetchAllSucessAction with empty non empty posts array', () => {
            const fetchAllSucessAction: FetchAllSucessAction = {
                type: FETCH_ALL_START_SUCCESS,
                data: {
                    posts: {
                        data: [
                            {
                                id: '1',
                                title: 'title',
                                body: 'body',
                            },
                        ],
                        meta: {},
                    },
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.posts).toEqual([
                {
                    id: '1',
                    title: 'title',
                    body: 'body',
                },
            ]);
            expect(reducerState.loading).toEqual(false);
            expect(reducerState.errors).toEqual(undefined);
        });
    });
});
