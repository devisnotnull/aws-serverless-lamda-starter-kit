import { RouterState } from 'react-router-redux';

import { IAppConfig, initialState as configInitialState } from './config/state';
import { ILayoutState, initialState as layoutInitialState } from './layout/state';
import { initialState as postInitialState, IPostState } from './post/state';
import { initialState as userInitialState, IUserState } from './user/state';

export interface IState {
    config: IAppConfig;
    post: IPostState;
    user: IUserState;
    layout: ILayoutState;
    router: RouterState | undefined;
}

export const initialState: IState = {
    config: configInitialState,
    layout: layoutInitialState,
    post: postInitialState,
    user: userInitialState,
    router: undefined,
};
