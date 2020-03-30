export interface IRequestAction<T, V> {
    type: T;
    request: V;
}

export interface IGraphqlQuery<V> {
    query: string;
    variables: V;
}

export interface IResponseAction<T, V> {
    type: T;
    payload: V | undefined;
}

export interface IGraphqlResponseAction<T, V> {
    type: T;
    data: V | undefined;
}

export type CheckNull<X> = X extends null ? number : X;
export type StringIs<X> = string extends X ? true : false;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Optionalize<T extends K, K> = Omit<T, keyof K>;
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export interface IDictionary<T> {
    [key: string]: T;
}
