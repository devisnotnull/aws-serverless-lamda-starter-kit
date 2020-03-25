import * as t from 'io-ts';

export const ProductModel = t.type({
    uuid: t.string,
    name: t.string,
});

export type IProductModel = t.TypeOf<typeof ProductModel>;
