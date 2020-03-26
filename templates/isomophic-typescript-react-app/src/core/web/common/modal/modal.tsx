import * as React from 'react'
import classnames from 'classnames';

import { IModalProps } from './modal.props'

import * as styles from './modal.css'
import Button from '../button/button'

export const Modal: React.FC<IModalProps> = ({ children, size, isVisible }) => (
    <>
        <div className={classnames(styles['Modal--overlay'], isVisible ? styles['Modal--visible'] : null)} />
        <div className={classnames(styles['Modal--content'], isVisible ? styles['Modal--visible'] : null)}>
            <div className={styles['Modal--header']}>
                <Button style='primary' />
            </div>
            <div>{children}</div>
        </div>
    </>
)

export default Modal
