export type IStateProps = {
    isVisible?: boolean
    style?: 'default' | 'small' | 'medium' | 'large'
}

export type IActionProps = {
    toggle(): void
}

export type IModalProps = IStateProps & IActionProps
