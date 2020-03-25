import * as t from 'io-ts';

export const TagsModel = t.type({
    value: t.string,
});

export type ITagModel = t.TypeOf<typeof TagsModel>;
