import { IResponseAction } from '../types';

export const SHOW_MODAL = '@layout/SHOW_MODAL';
export const HIDE_MODAL = '@layout/HIDE_MODAL';

// You can use the provided IResponseAction or IRequestAction interface.
// The first Type argument is the action
// The second Type argument is the payload or request
export type ModalShowAction = IResponseAction<typeof SHOW_MODAL, boolean>;
export type ModalHideAction = IResponseAction<typeof HIDE_MODAL, boolean>;

export type ActionTypes = ModalShowAction | ModalHideAction;
