import { Field, InputType } from 'type-graphql';

@InputType()
export class OptionGroupInput {

    @Field(type => String)
    uuid: string;

    @Field(type => String)
    name: string;
}
