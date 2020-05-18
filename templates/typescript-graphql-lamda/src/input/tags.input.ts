import { Field, InputType, Int } from 'type-graphql';
import { ArrayMaxSize } from 'class-validator';

import { ITagModel } from '../models/tags.model';

@InputType()
export class TagInput implements Partial<ITagModel> {
    
    @Field({ nullable: true })
    uuid?: string;

    @Field()
    value: string;
}
