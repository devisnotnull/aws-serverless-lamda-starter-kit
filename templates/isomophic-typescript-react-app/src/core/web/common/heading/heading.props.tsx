export type Sizes = 'xsmall' | 'small' | 'medium' | 'large';

type IStateProps = {
    size: Sizes
}

type IActionProps = {
    onHover?(): void
}

export type IHeadingProps = IStateProps & IActionProps
