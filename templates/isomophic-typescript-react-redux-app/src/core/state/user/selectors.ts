import { pipe } from 'ramda';

import { IUserState } from './state';
import { IState } from '../state';

export const getUsers = (state: IState): IUserState => state.user;

export const usersItems = (state: IUserState) => state?.users;
export const usersLoading = (state: IUserState) => state?.loading;
export const usersItemsErrors = (state: IUserState) => state?.errors;

export const getUsersItems = pipe(getUsers, usersItems);
export const getUsersLoading = pipe(getUsers, usersLoading);
export const getUsersItemsErrors = pipe(getUsers, usersItemsErrors);
