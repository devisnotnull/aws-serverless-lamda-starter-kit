import * as React from 'react'
import { IButtonProps } from './button.props'

export const Button: React.FC<IButtonProps> = ({ children, disabled, onClick, type, style }) => (
    <button type={type} disabled={disabled} onClick={onClick}>
        {children}
    </button>
)

export default Button
