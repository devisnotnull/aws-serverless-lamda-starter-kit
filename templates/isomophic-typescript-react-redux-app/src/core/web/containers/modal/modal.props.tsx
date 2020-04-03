export interface IStateProps {
    rootElement?: string;
    topic?: string;
    payload?: any;
    isVisble?: boolean;
}

export type IActionProps = {
    hideModal(): void;
};

export type IModalProps = IStateProps & IActionProps;
