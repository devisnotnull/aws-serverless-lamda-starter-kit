import { prop } from 'ramda';

import { IAppConfig } from './state';
import { IState } from '../state';

export const getConfig = (state: IState): IAppConfig => prop('config', state);
