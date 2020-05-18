import { Field, InputType, Int } from 'type-graphql';

import { IProductModel } from '../models/product.model';
import { VariantInput } from './variant.input';

@InputType()
export class ProductInput implements Partial<IProductModel> {

    @Field(type => String)
    uuid: string;

    @Field(type => String)
    name: string;
}
