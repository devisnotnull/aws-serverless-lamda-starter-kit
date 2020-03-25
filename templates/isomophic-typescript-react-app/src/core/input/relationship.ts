export class RelationshipItemInput {
    uuid: string;
    parentType: string;
    parentUuid: string;
    brand: string;
    locale: string;
    weight: number;
    relationshipType: string;
    childUuid: string;
    tags: [String]
}
