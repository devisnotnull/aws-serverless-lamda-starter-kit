import { prop } from 'ramda'

import { IAppConfigState } from './state'
import { IState } from '../state'

export const getLayout = (state: IState): IAppConfigState => prop('config', state)
