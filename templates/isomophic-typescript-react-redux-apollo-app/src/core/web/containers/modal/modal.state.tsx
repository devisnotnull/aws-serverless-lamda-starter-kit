import { getIsModalVisible } from '@core/state/layout/selectors';
import { hideModal } from '@core/state/layout/actions';

import { IActionProps, IStateProps } from './modal.props';

export const mapStateToProps = (state: any): IStateProps => ({
    isVisble: getIsModalVisible(state),
});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    hideModal: () => dispatch(hideModal()),
});
