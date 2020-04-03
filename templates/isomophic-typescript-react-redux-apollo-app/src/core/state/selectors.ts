import { prop } from 'ramda';

import { IAppConfig } from './config/state';
import { ILayoutState } from './layout/state';

import { IState } from './state';

export const getLayout = (state: IState): ILayoutState => prop('layout', state);
export const getConfig = (state: IState): IAppConfig => prop('config', state);
