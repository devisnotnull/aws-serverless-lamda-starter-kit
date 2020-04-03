import { IUser } from '@core/models/user';

export interface IUserState {
    readonly loading: boolean;
    readonly errors: string | undefined;
    readonly users: IUser[];
}

export const initialState: IUserState = {
    users: [],
    errors: undefined,
    loading: false,
};
