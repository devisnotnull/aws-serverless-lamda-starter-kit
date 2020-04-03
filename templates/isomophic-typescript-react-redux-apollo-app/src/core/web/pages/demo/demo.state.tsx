import { IState } from '@core/state/state';
import { showModal } from '@core/state/layout/actions';

import { IStateProps, IActionProps } from './demo.props';

export const mapStateToProps = (state: IState): IStateProps => ({});

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    showModal: () => dispatch(showModal()),
});
