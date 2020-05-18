import { Field, InputType } from 'type-graphql';

@InputType()
export class OptionInput {

    @Field(type => String)
    uuid: string;

    @Field(type => String)
    name: string;
}
