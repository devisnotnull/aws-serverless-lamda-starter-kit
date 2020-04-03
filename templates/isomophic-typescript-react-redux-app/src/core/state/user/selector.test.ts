import { initialState, IUserState } from './state';

import { usersItems, usersItemsErrors, usersLoading } from './selectors';

describe('post selectors', () => {
    let state: IUserState;

    beforeEach(() => {
        state = initialState;
    });

    it('reducer: getUsersItems', () => {
        const reducerState = usersItems(state);
        expect(reducerState).toBe(state.users);
    });

    it('reducer: getUsersItemsErrors', () => {
        const reducerState = usersItemsErrors(state);
        expect(reducerState).toBe(state.errors);
    });

    it('reducer: getUsersLoading', () => {
        const reducerState = usersLoading(state);
        expect(reducerState).toBe(state.loading);
    });
});
