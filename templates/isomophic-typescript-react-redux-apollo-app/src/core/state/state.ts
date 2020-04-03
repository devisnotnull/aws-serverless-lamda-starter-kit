import { RouterState } from 'react-router-redux';

import { IAppConfig, initialState as configInitialState } from './config/state';
import { ILayoutState, initialState as layoutInitialState } from './layout/state';


export interface IState {
    config: IAppConfig;
    layout: ILayoutState;
    router: RouterState | undefined;
}

export const initialState: IState = {
    config: configInitialState,
    layout: layoutInitialState,
    router: undefined,
};
