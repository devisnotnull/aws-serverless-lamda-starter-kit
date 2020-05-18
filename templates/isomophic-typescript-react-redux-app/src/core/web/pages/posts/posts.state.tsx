import { getPostsItems, getPostsLoading, getPostsItemsErrors } from '@core/state/post/selectors';
import { fetchAllPostsRequest } from '@core/state/post/actions';
import { IState } from '@core/state/state';

import { IStateProps, IActionProps } from './posts.props';

export const mapStateToProps = (state: IState): IStateProps => ({
    loading: getPostsLoading(state),
    errors: getPostsItemsErrors(state),
    posts: getPostsItems(state),
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    onFetchAllAction: () => dispatch(fetchAllPostsRequest()),
});
