export type IStateProps = {
    isVisible?: boolean;
    size?: 'default' | 'small' | 'medium' | 'large';
};

export type IActionProps = {
    hideModal(): void;
};

export type IModalProps = IStateProps & IActionProps;
