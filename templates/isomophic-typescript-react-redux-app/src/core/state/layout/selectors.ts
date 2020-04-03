import { pipe } from 'ramda';

import { ILayoutState } from './state';
import { IState } from '../state';

export const getLayout = (state: IState): ILayoutState => state.layout;

export const modal = (state: ILayoutState) => state.modal;
export const IsModalVisible = (state: ILayoutState) => state.modal?.isVisible ?? false;

export const getModal = pipe(getLayout, modal);
export const getIsModalVisible = pipe(getLayout, IsModalVisible);
