import { IUserState, initialState } from './state';
import { FetchAllSucessAction, FetchAllAction, FETCH_ALL_SUCCESS, FETCH_ALL } from './types';
import { postReducers } from './reducer';

describe('post reducers: FETCH_ALL_*', () => {
    let state: IUserState;

    beforeEach(() => {
        state = initialState;
    });

    describe('action: FetchAllAction', () => {
        it('reducer: FetchAllAction', () => {
            const fetchAllSucessAction: FetchAllAction = {
                type: FETCH_ALL,
                request: {
                    path: '',
                    query: {},
                    verb: 'GET',
                    body: {},
                },
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.users).toEqual([]);
            expect(reducerState.loading).toEqual(true);
            expect(reducerState.errors).toEqual(undefined);
        });
    });

    describe('action: FetchAllSucessAction', () => {
        it('reducer: FetchAllSucessAction with empty users array', () => {
            const fetchAllSucessAction: FetchAllSucessAction = {
                type: FETCH_ALL_SUCCESS,
                data: [],
            };
            const reducerState = postReducers(state, fetchAllSucessAction);
            expect(reducerState.users).toEqual([]);
            expect(reducerState.loading).toEqual(false);
            expect(reducerState.errors).toEqual(undefined);
        });
    });
});
