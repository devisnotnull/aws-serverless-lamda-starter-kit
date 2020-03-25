export interface IStateProps {
    rootElement?: string
    topic?: string
    payload?: any
    isVisible?: boolean
}

export type IActionProps = {
    toggleModal(toggle?: boolean): void
}

export type IModalProps = IStateProps & IActionProps
