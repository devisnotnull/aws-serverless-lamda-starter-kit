import * as t from 'io-ts';

export const RangeModel = t.type({
    uuid: t.string,
    name: t.string,
});

export type IRangeModel = t.TypeOf<typeof RangeModel>;
