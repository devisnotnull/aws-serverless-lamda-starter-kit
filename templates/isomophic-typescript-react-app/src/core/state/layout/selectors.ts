import { prop, pipe } from 'ramda'

import { ILayoutState } from './state'
import { IState } from '../state'

export const getLayout = (state: IState): ILayoutState => prop('layout', state)

export const getLayoutBreadcrumb = pipe(getLayout, prop('breadcrumb'))

export const getIsModalVisible = pipe(getLayout, prop('isModalVisible'))
