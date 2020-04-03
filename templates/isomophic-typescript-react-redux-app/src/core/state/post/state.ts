import { IPost } from '@core/models/post';

export interface IPostState {
    readonly loading: boolean;
    readonly errors: string | undefined;
    readonly total?: number;
    readonly skip?: number;
    readonly post: IPost | undefined;
    readonly posts: IPost[];
}

export const initialState: IPostState = {
    total: 0,
    skip: 0,
    post: undefined,
    posts: [],
    errors: undefined,
    loading: false,
};
