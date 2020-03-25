import { fetchAllProductsRequest, fetchProductsByIdRequest } from '../../../state/product/actions'
import { updateBreadcrumb } from '../../../state/layout/actions'
import { getLayoutBreadcrumb } from '../../../state/layout/selectors'

import { IActionProps, IStateProps } from './header.props'

export const mapStateToProps = (state: any): IStateProps => ({
    breadcrumb: getLayoutBreadcrumb(state),
})

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    setBreadCrumb: (breadcrumb: string[]) => dispatch(updateBreadcrumb(breadcrumb)),
    onFetchAllAction: () => dispatch(fetchAllProductsRequest()),
    onFetchByIdAction: (id: string) => dispatch(fetchProductsByIdRequest(id)),
})
