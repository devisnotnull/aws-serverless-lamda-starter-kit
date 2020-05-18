import { IUser } from '@core/models/user';

export type IStateProps = {
    loading: boolean;
    errors: any;
    users: IUser[];
};

export type IActionProps = {
    onFetchAllAction(): void;
};

export type IOptionGroupComponentProps = IStateProps & IActionProps;
