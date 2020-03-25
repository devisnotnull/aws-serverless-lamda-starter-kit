export type IStateProps = {
    childRelationships: any
    parentRelationships: any
}

export type IActionProps = {
    onDeleteRelationshipItemAction(uuid: string): void
}

export type IRelationshipComponentProps = IStateProps & IActionProps
