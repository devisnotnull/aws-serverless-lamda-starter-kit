import { pipe } from 'ramda';

import { IPostState } from './state';
import { IState } from '../state';

export const getPosts = (state: IState): IPostState => state.post;

export const postsItem = (state: IPostState) => state?.post;
export const postsItems = (state: IPostState) => state?.posts;
export const postsLoading = (state: IPostState) => state?.loading;
export const postsItemsErrors = (state: IPostState) => state?.errors;

export const getPostItem = pipe(getPosts, postsItem);
export const getPostsItems = pipe(getPosts, postsItems);
export const getPostsLoading = pipe(getPosts, postsLoading);
export const getPostsItemsErrors = pipe(getPosts, postsItemsErrors);
