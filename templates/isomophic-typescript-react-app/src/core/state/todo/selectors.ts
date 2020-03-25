import { prop, pipe, propOr } from 'ramda'

import { IOptionGroupState } from './reducer'
import { IState } from '../state'

export const getOptionGroups = (state: IState): IOptionGroupState => state?.optionGroups

export const getOptionGroupsItems = pipe(getOptionGroups, prop('data'))

export const getOptionGroupsLoading = pipe(getOptionGroups, prop('loading'))

export const getOptionGroupsItemsErrors = pipe(getOptionGroups, propOr(undefined, 'errors'))
