import { initialState, IPostState } from './state';

import { postsItem, postsItems, postsItemsErrors, postsLoading } from './selectors';

describe('post selectors', () => {
    let state: IPostState;

    beforeEach(() => {
        state = initialState;
    });

    it('reducer: getPostItem', () => {
        const reducerState = postsItem(state);
        expect(reducerState).toBe(state.post);
    });

    it('reducer: getPostsItems', () => {
        const reducerState = postsItems(state);
        expect(reducerState).toBe(state.posts);
    });

    it('reducer: getPostsItemsErrors', () => {
        const reducerState = postsItemsErrors(state);
        expect(reducerState).toBe(state.errors);
    });

    it('reducer: getPostsLoading', () => {
        const reducerState = postsLoading(state);
        expect(reducerState).toBe(state.loading);
    });
});
