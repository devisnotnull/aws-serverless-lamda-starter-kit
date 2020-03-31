import { getUsersItems, getUsersLoading, getUsersItemsErrors } from '@core/state/user/selectors';
import { fetchAllUsersRequest } from '@core/state/user/actions';
import { IState } from '@core/state/state';

import { IStateProps, IActionProps } from './users.props';

export const mapStateToProps = (state: IState): IStateProps => ({
    loading: getUsersLoading(state),
    errors: getUsersItemsErrors(state),
    users: getUsersItems(state),
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAllAction: () => dispatch(fetchAllUsersRequest()),
});
