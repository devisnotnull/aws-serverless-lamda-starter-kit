import { Field, ObjectType } from 'type-graphql';

import { EntityBase } from './base.entity';
import { IDeleteResult } from '../models/delete.model';

@ObjectType()
export class DeleteResult implements IDeleteResult {
    @Field(type => Boolean)
    sucess: boolean;

    @Field(type => Number)
    affected: number;
}

