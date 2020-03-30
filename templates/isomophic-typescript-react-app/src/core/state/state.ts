import { RouterState } from 'react-router-redux';

import { IIAppConfigState, initialState as configInitialState } from './config/state';
import { ILayoutState, initialState as layoutInitialState } from './layout/state';
import { initialState as postInitialState, IPostState } from './post/state';

export interface IState {
    config: IIAppConfigState;
    post: IPostState;
    layout: ILayoutState;
    router: RouterState | undefined;
    network: any;
}

export const initialState: IState = {
    config: configInitialState,
    layout: layoutInitialState,
    network: {},
    post: postInitialState,
    router: undefined,
};
