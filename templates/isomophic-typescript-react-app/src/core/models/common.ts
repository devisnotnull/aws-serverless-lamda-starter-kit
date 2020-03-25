export interface ICommonPayload<T> {
    total: number
    skip: number
    limit: number
    data: Array<T>
}
