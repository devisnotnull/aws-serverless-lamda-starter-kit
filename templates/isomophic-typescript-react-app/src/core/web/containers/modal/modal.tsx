import React from 'react';

import { Modal } from '@core/web/common/modal/modal'

import {
    useModal,
    useHideModal
} from '@core/state/layout/hooks';

export const ModalWrapper = () => {
    const { modal } = useModal();
    const { handleOnClose } = useHideModal();

    return (
        <Modal isVisible={modal.isVisible}>
            <button onClick={() => handleOnClose()}>Close</button>
        </Modal>
    );
};