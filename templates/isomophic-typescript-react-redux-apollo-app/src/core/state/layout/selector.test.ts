import { initialState, ILayoutState } from './state';

import { modal, IsModalVisible } from './selectors';

describe('post selectors', () => {
    let state: ILayoutState;

    beforeEach(() => {
        state = initialState;
    });

    //
    it('reducer: getModal', () => {
        const reducerState = modal(state);
        expect(reducerState).toBe(state.modal);
    });

    it('reducer: IsModalVisible', () => {
        const reducerState = IsModalVisible(state);
        expect(reducerState).toBe(state.modal.isVisible);
    });
});
