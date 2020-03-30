import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalComponent from '../../common/modal/modal';

import { IModalProps } from './modal.props';
import { mapDispatchToProps, mapStateToProps } from './modal.state';

export const Modal: React.FC<IModalProps> = ({
    rootElement,
    topic,
    payload,
    hideModal,
    isVisble,
}) => {
    const modalPortalContainer: HTMLElement | null = document.getElementById(
        rootElement ?? 'modal-root'
    );
    if (!modalPortalContainer) return <React.Fragment />;
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalComponent isVisible={isVisble} hideModal={hideModal} />,
                modalPortalContainer
            )}
        </React.Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
