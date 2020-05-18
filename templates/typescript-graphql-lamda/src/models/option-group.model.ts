import * as t from 'io-ts';

export const OptionGroupModel = t.type({
    uuid: t.string,
    name: t.string,
});

export type IOptionGroup = t.TypeOf<typeof OptionGroupModel>;
