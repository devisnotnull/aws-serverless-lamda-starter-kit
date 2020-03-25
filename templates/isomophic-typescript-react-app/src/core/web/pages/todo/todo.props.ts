import { IOptionGroupPayload } from '../../../models/optionGroup'

export type IStateProps = {
    title?: string
    loading: boolean
    errors: any
    optionGroups: IOptionGroupPayload[]
}

export type IActionProps = {
    onFetchAllAction(): void
    onCreateRelationship(payload: object): void
}

export type IOptionGroupComponentProps = IStateProps & IActionProps
