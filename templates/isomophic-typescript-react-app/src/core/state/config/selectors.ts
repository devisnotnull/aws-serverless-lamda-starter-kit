import { prop } from 'ramda';

import { IIAppConfigState } from './state';
import { IState } from '../state';

export const getConfig = (state: IState): IIAppConfigState => prop('config', state);
