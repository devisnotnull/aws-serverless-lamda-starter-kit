import * as React from 'react'

import { IModalProps } from './modal.props'

import * as styles from './modal.css'

export const Modal: React.FC<IModalProps> = ({ children, toggle }) => (
    <React.Fragment>
        <div className={styles['Modal--Overlay']} />
        <div className={styles['Modal--Content']}>
            <div className={styles['Modal--Header']}>
                <button onClick={e => toggle()} />
            </div>
            <div>{children}</div>
        </div>
    </React.Fragment>
)

export default Modal
