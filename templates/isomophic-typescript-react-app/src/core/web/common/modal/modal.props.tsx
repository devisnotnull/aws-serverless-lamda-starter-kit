export type IStateProps = {
    isVisible?: boolean
    size?: 'default' | 'small' | 'medium' | 'large'
}

export type IActionProps = {}

export type IModalProps = IStateProps & IActionProps
