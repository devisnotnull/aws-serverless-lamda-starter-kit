import { RouterState } from 'react-router-redux'

import { IOptionGroupState } from './optionGroup/reducer'
import { ILayoutState } from './layout/state'

export interface IState {
    optionGroups: IOptionGroupState
    layout: ILayoutState
    // External reducers
    router: RouterState
    network: any
}
