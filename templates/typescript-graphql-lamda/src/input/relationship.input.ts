import { Field, InputType, Int } from 'type-graphql';


@InputType()
export class RelationshipItemInput {

    @Field({ nullable: true })
    uuid: string;

    @Field({ nullable: false })
    parentType: string;
    
    @Field(type => String)
    parentUuid: string;

    @Field({ nullable: false })
    brand: string;

    @Field({ nullable: false })
    locale: string;
    
    @Field(type => Number)
    weight: number;

    @Field(type => String)
    relationshipType: string;

    @Field({ nullable: false })
    childUuid: string;
}
