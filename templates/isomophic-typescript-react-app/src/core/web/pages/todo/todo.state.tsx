import {
    fetchAllOptionGroupsRequest,
    createOptionGroupsRequest,
} from '../../../state/optionGroup/actions'
import {
    getOptionGroupsItems,
    getOptionGroupsItemsErrors,
    getOptionGroupsLoading,
} from '../../../state/optionGroup/selectors'

import { IState } from '@core/state/state'

import { IStateProps, IActionProps } from './todo.props'

export const mapStateToProps = (state: IState): IStateProps => ({
    loading: getOptionGroupsLoading(state),
    errors: getOptionGroupsItemsErrors(state),
    optionGroups: getOptionGroupsItems(state),
})

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAllAction: () => dispatch(fetchAllOptionGroupsRequest()),
    onCreateRelationship: (payload: object) => dispatch(createOptionGroupsRequest(payload)),
})
