export interface IQueryOptions {
    brand?: string
    locale?: string
}

export interface IQuerySingular extends IQueryOptions {}

export interface IQueryMultiple extends IQueryOptions {
    page?: number;
    perPage?: number;
    sort?: string
    sortOrder: boolean;
}