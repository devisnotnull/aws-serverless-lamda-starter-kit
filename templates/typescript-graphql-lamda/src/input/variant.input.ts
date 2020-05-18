import { Field, InputType, Int } from 'type-graphql';

import { IVariantModel } from '../models/variant.model';

@InputType()
export class VariantInput implements Partial<IVariantModel> {
    @Field()
    uuid: string;

    @Field()
    name: string;
}
