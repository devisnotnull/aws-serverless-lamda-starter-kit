import * as React from 'react';
import classnames from 'classnames';

import { IModalProps } from './modal.props';

import * as styles from './modal.css';
import Button from '../button/button';

export const Modal: React.FC<IModalProps> = ({ children, size, isVisible, hideModal }) => (
    <>
        <div
            className={classnames(
                isVisible ? styles['Modal--visible'] : styles['Modal--hidden'],
                styles['Modal--overlay']
            )}
        />
        <div
            className={classnames(
                isVisible ? styles['Modal--visible'] : styles['Modal--hidden'],
                styles['Modal--content'],
                styles['Modal--size-medium']
            )}
        >
            <div className={styles['Modal--header']}>
                <Button style="primary" onClick={() => hideModal()}>
                    Hide Modal
                </Button>
            </div>
            <div>{children}</div>
        </div>
    </>
);

export default Modal;
