import { ILayoutState, initialState } from './state';
import { ModalHideAction, ModalShowAction, HIDE_MODAL, SHOW_MODAL } from './types';
import { layoutReducer } from './reducer';

describe('post reducers: FETCH_ALL_*', () => {
    let state: ILayoutState;

    beforeEach(() => {
        state = initialState;
    });

    //

    describe('action: ModalHideAction', () => {
        it('reducer: ModalHideAction', () => {
            const fetchAllSucessAction: ModalHideAction = {
                type: HIDE_MODAL,
                payload: false,
            };
            const reducerState = layoutReducer(state, fetchAllSucessAction);
            expect(reducerState.modal.isVisible).toEqual(false);
        });
    });

    describe('action: ModalShowAction', () => {
        it('reducer: ModalShowAction', () => {
            const fetchAllSucessAction: ModalShowAction = {
                type: SHOW_MODAL,
                payload: true,
            };
            const reducerState = layoutReducer(state, fetchAllSucessAction);
            expect(reducerState.modal.isVisible).toEqual(true);
        });
    });
});
