import { ISelectableEntity } from '../../../models/selectableEntity'

export type IStateProps = {
    loading: boolean
    isSelectable: boolean
    errors: any
    selectable: ISelectableEntity[]
}

export type IProductComponentProps = IStateProps
