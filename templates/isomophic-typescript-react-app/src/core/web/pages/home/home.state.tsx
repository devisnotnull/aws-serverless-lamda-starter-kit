import { fetchAllProductsRequest, fetchProductsByIdRequest } from '../../../state/product/actions'
import { updateBreadcrumb } from '../../../state/layout/actions'
import { IState } from '@core/state/state'
import { IStateProps, IActionProps } from './home.props'

export const mapStateToProps = (state: IState): IStateProps => ({})

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    setBreadCrumb: (breadcrumb: string[]) => dispatch(updateBreadcrumb(breadcrumb)),
    onFetchAllAction: () => dispatch(fetchAllProductsRequest()),
    onFetchByIdAction: (id: string) => dispatch(fetchProductsByIdRequest(id)),
})
