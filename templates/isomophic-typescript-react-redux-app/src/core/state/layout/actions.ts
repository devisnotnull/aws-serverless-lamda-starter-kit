import { ActionTypes, SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (): ActionTypes => ({
    type: SHOW_MODAL,
    payload: true,
});

export const hideModal = (): ActionTypes => ({
    type: HIDE_MODAL,
    payload: false,
});
