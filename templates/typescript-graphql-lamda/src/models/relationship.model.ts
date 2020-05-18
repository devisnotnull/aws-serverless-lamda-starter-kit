import * as t from 'io-ts';

import { TagsModel } from './tags.model';

export const RequiredRelationshipModel = t.type({
    uuid: t.string,
    parentUuid: t.string,
    parentType: t.string,
    brand: t.string,
    locale: t.string,
    weight: t.number,
    childUuid: t.string,
    relationshipType: t.string,
});

export const OptionalRelationshipModel = t.partial({
    tags: t.array(TagsModel)
})

export const RelationshipModel = t.union([RequiredRelationshipModel, OptionalRelationshipModel]);

export type IRelationshipItemModel = t.TypeOf<typeof RelationshipModel>;



