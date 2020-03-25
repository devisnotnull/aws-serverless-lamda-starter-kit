import { Field, ObjectType } from 'type-graphql';
import { Entity, OneToMany, Column, Index, Generated, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

import { EntityBase } from './base.entity';

import { IOptionGroup } from '../models/option-group.model'
import { Option } from './option.schema';

@ObjectType()
@Entity()
export class OptionGroup implements IOptionGroup {
    @PrimaryGeneratedColumn('increment')
    @Field(type => Number)
    id?: number;

    @Column()
    @CreateDateColumn({ type: 'date' })
    created?: Date;

    @Generated('uuid')
    @Column()
    @Index({ unique: true })
    @Field(type => String)
    uuid: string;

    @Column()
    @Index({ unique: true })
    @Field(type => String)
    name: string;
}
