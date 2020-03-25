export type IStateProps = {
    breadcrumb: string[]
}

export type IActionProps = {
    onFetchAllAction(): void
    onFetchByIdAction(id: string): void
    setBreadCrumb(breadcrumb: string[]): void
}

export type IHomeComponentProps = IStateProps & IActionProps
