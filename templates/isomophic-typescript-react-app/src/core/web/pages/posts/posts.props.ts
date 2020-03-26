import { IPost } from '@core/models/post'

export type IStateProps = {
    title?: string
    loading: boolean
    errors: any
    posts: IPost[]
}

export type IActionProps = {
    onFetchAllAction(): void
}

export type IOptionGroupComponentProps = IStateProps & IActionProps
