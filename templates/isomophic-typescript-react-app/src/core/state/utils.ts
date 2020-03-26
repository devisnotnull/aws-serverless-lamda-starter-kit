export interface IGraphqlActionQuery<T, V> {
    type: T;
    request: {
        query: string;
        variables: V;
    }
}

export type CheckNull<X> = X extends null ? number : X
export type StringIs<X>  = string extends X ? true : false
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Optionalize<T extends K, K> = Omit<T, keyof K>;
export type Nullable<T> = T | null
export type Maybe<T> = T | undefined
export type Dictionary<T> = { [key: string]: T }
