import { DocumentNode } from 'graphql';

// Typed requests

export interface IRequestAction<T, V> {
    type: T;
    request: V;
}

export interface IGraphqlQuery<V> {
    query: string | DocumentNode;
    variables: V;
}

export interface IRestRequest {
    path: string;
    verb: 'POST' | 'GET';
    query: { [key: string]: string };
    body: any;
}

// Typed response

export interface IAction<T, V> {
    type: T;
    payload: V | undefined;
}

export interface IRestResponseAction<T, V> {
    type: T;
    data: V | undefined;
}

export interface IGraphqlResponseAction<T, V> {
    type: T;
    data: V | undefined;
}

// Generator payloads

export interface IPayload<T> {
    data: T;
}

// Generic helpers

export type CheckNull<X> = X extends null ? number : X;
export type StringIs<X> = string extends X ? true : false;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Optionalize<T extends K, K> = Omit<T, keyof K>;
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export interface IDictionary<T> {
    [key: string]: T;
}
