export type IStateProps = {
    title?: string
    match?: {
        path: string
        url: string
        params: any
    }
    stuff: any
    loading: boolean
    errors: any
    product: any
    childRelationships: any
    parentRelationships: any
}

export type IActionProps = {
    onFetchByIdAction(uuid: string): void
    onCreateProduct(payload: object): void
    onFetchAllParentRelationshipsAction(uuid: string): void
    onFetchAllChildRelationshipsAction(uuid: string): void
    onDeleteRelationshipItemAction(uuid: string): void
    onCreateRelationshipItem(payload: object): void
}

export type IProductComponentProps = IStateProps & IActionProps
