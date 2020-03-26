import { prop, pipe, propOr } from 'ramda'

import { IPostState } from './state'
import { IState } from '../state'

export const getPosts = (state: IState): IPostState => state?.post ?? {}

export const getPostsItems = pipe(getPosts, prop('data'))

export const getPostsLoading = pipe(getPosts, prop('loading'))

export const getPostsItemsErrors = pipe(getPosts, propOr(undefined, 'errors'))
