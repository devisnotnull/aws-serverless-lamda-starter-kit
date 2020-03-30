import { RouterState } from 'react-router-redux';

import { IAppConfig, initialState as configInitialState } from './config/state';
import { ILayoutState, initialState as layoutInitialState } from './layout/state';
import { initialState as postInitialState, IPostState } from './post/state';

export interface IState {
    config: IAppConfig;
    post: IPostState;
    layout: ILayoutState;
    router: RouterState | undefined;
}

export const initialState: IState = {
    config: configInitialState,
    layout: layoutInitialState,
    post: postInitialState,
    router: undefined,
};
