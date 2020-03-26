import { RouterState } from 'react-router-redux'

import { IAppConfigState  } from './config/state';
import { IPostState } from './post/state'
import { ILayoutState } from './layout/state'

export interface IState {
    config: IAppConfigState,
    post: IPostState
    layout: ILayoutState
    router: RouterState
    network: any
}
