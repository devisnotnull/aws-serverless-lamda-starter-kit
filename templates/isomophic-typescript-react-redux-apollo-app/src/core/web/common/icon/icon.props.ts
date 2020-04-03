export type Icon =
    | 'close'
    | 'heart'
    | 'arrow'
    | 'arrow-up'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'locale'
    | 'basket'
    | 'tick'
    | 'close'
    | 'print'
    | 'tick-circle'
    | 'box'
    | 'upload'
    | 'truck'
    | 'alert';

type IStateProps = {
    name: Icon;
    alt?: string;
    className?: string;
};

type IActionProps = {};

export type IButtonProps = IStateProps & IActionProps;
