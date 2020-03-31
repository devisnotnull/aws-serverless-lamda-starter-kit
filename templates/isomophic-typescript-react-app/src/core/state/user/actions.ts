import { ActionTypes, FETCH_ALL, FETCH_ALL_SUCCESS } from './types';
import { IUser } from '@core/models/user';

export const fetchAllUsersRequest = (): ActionTypes => ({
    type: FETCH_ALL,
    request: {
        path: '/users',
        verb: 'GET',
        query: {},
        body: {},
    },
});

export const fetchAllUsersSucess = (data: IUser[]): ActionTypes => ({
    type: FETCH_ALL_SUCCESS,
    data,
});
