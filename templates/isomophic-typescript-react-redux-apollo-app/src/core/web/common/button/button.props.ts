import * as React from 'react';

type IStateProps = {
    disabled?: boolean;
    type?: 'submit';
    style?: 'default' | 'primary' | 'secondary' | 'alert';
    dataTestId?: 'test-id-button-default-submit';
};

type IActionProps = {
    onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
};

export type IButtonProps = IStateProps & IActionProps;
