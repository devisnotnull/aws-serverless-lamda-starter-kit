import { Field, InputType, Int } from 'type-graphql';

import { IVariantModel } from '../models/variant.model';

@InputType()
export class RangeInput implements Partial<IVariantModel> {

    @Field(type => String)
    uuid: string;

    @Field(type => String)
    name: string;
}
