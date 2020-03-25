import React from 'react'
import ReactDOM from 'react-dom'

export interface IProps {
    rootElement?: string
}

import * as styles from './modal.css'

export const Modal: React.FC<IProps> = ({ children, rootElement }) => {
    const modalPortalContainer: HTMLElement | null = document?.getElementById(
        rootElement ?? 'modal-root'
    )
    if (!modalPortalContainer) return <React.Fragment />
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={styles.Modal}>{children}</div>,
                modalPortalContainer
            )}
        </React.Fragment>
    )
}

export default Modal
