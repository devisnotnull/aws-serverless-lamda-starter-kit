export interface IStateProps {
    rootElement?: string
    topic?: string
    payload?: any
}

export type IActionProps = {
}

export type IModalProps = IStateProps & IActionProps
