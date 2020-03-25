import { updateBreadcrumb } from '../../state/layout/actions'

export type IStateProps = {}

export type IActionProps = {
    setBreadCrumb(breadcrumb: string[]): void
}

export type ICommonProps = IStateProps & IActionProps

export const mapCommonStateToProps = (state: any): IStateProps => ({})

export const mapCommonDispatchToProps = (dispatch: any): IActionProps => ({
    setBreadCrumb: (breadcrumb: string[]) => dispatch(updateBreadcrumb(breadcrumb)),
})
