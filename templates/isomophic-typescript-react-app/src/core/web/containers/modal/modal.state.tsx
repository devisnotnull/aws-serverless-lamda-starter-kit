import { getIsModalVisible } from '../../../state/layout/selectors'

import { toggleModal } from '../../../state/layout/actions'
import { IActionProps, IStateProps } from './modal.props'

export const mapStateToProps = (state: any): IStateProps => ({
    isVisible: getIsModalVisible(state),
})

export const mapDispatchToProps = (dispatch: any): IActionProps => ({
    toggleModal: (toggle?: boolean) => dispatch(toggleModal(toggle)),
})
