import { IProductState } from '../state/product/reducer'
import { IVariantState } from '../state/variant/reducer'
import { IOptionState } from '../state/options/reducer'
import { IOptionGroupState } from '../state/optionGroup/reducer'
import { IRelationshipState } from '../state/relationship/reducer'
import { IRangeState } from '../state/range/reducer'

export interface IState {
    variants: IVariantState
    options: IOptionState
    optionGroups: IOptionGroupState
    products: IProductState
    relationships: IRelationshipState
    ranges: IRangeState
    network: any
}
