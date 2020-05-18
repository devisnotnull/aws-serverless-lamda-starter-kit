import * as t from 'io-ts';

export const VariantModel = t.type({
    uuid: t.string,
    name: t.string,
});

export type IVariantModel = t.TypeOf<typeof VariantModel>;
