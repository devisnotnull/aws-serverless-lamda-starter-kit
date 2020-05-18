import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

import { EntityBase } from './base.entity';

@ObjectType()
@Entity()
export class Activity extends EntityBase {
    @PrimaryGeneratedColumn('uuid')
    @Field(type => String)
    id: string;

    @Column()
    @Field(type => String)
    service: string;

    @Column()
    @Field(type => String)
    action: string;
}
