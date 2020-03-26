import * as React from 'react'
import { IButtonProps } from './button.props'

import * as styles from './button.css';

export const Button: React.FC<IButtonProps> = ({ children, disabled, onClick, type = 'submit', style = 'default' }) => (
    <button type={type} disabled={disabled} onClick={onClick} className={styles[`Button--${style}`]}>
        {children}
    </button>
)

export default Button
