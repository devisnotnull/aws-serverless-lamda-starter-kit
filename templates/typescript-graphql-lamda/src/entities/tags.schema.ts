import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, Generated, Index } from 'typeorm';

import { ITagModel } from '../models/tags.model';

@ObjectType()
@Entity()
export class Tag implements ITagModel {
    @PrimaryGeneratedColumn('increment')
    @Field(type => Number)
    id?: number;

    @Generated('uuid')
    @Column()
    @Field(type => String)
    uuid: string;

    @Index()
    @Column()
    @Field(type => String)
    key: string;

    @Index()
    @Column()
    @Field(type => String)
    value: string;
}
