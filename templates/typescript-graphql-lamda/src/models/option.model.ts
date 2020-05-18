import * as t from 'io-ts';

export const OptionModel = t.partial({
    uuid: t.string,
    name: t.string,
});

export type IOption = t.TypeOf<typeof OptionModel>;
