import { IPost } from '../../models/post'
import { ICommonPayload } from '../../models/common'

export interface IPostState extends ICommonPayload<IPost> {
    readonly loading: boolean
    readonly errors?: string
}

export const initialState: IPostState = {
    total: 0,
    skip: 0,
    limit: 0,
    data: [],
    errors: undefined,
    loading: false,
}
