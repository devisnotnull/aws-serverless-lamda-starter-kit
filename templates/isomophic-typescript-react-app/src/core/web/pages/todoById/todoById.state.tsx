import { createProductsRequest, fetchProductsByIdRequest } from '../../../state/product/actions'
import {
    fetchRelationshipByParentUUIDRequest,
    deleteRelationshipItemRequest,
    fetchRelationshipByChildUUIDRequest,
    createRelationshipsRequest,
} from '../../../state/relationship/actions'
import {
    getProductsLoading,
    getProductsItemsErrors,
    getProductsItemsCurrent,
} from '../../../state/product/selectors'
import {
    getRelationshipsCurrentChildItems,
    getRelationshipsCurrentParentItems,
} from '../../../state/relationship/selectors'
import { IState } from '@core/state/state'
import { IStateProps, IActionProps } from './todoById.props'

export const mapStateToProps = (state: IState, ownProps: any): IStateProps => ({
    stuff: ownProps.match.params.id,
    childRelationships: getRelationshipsCurrentChildItems(state),
    parentRelationships: getRelationshipsCurrentParentItems(state),
    loading: getProductsLoading(state),
    errors: getProductsItemsErrors(state),
    product: getProductsItemsCurrent(state),
})

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchByIdAction: (uuid: string) => dispatch(fetchProductsByIdRequest(uuid)),
    onCreateProduct: (payload: object) => dispatch(createProductsRequest(payload)),
    onCreateRelationshipItem: (payload: object) => dispatch(createRelationshipsRequest(payload)),
    onFetchAllParentRelationshipsAction: (uuid: string) =>
        dispatch(fetchRelationshipByParentUUIDRequest(uuid)),
    onFetchAllChildRelationshipsAction: (uuid: string) =>
        dispatch(fetchRelationshipByChildUUIDRequest(uuid)),
    onDeleteRelationshipItemAction: (uuid: string) => dispatch(deleteRelationshipItemRequest(uuid)),
})
