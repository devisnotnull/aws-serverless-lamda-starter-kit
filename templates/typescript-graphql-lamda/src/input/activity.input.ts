import { Field, InputType, Int } from 'type-graphql';
import { ArrayMaxSize } from 'class-validator';

import { IVariantModel } from '../models/variant.model';

@InputType()
export class ActivityInput implements Partial<IVariantModel> {
    
    @Field(type => String)
    uuid: string;

    @Field(type => String)
    name: string;
}
