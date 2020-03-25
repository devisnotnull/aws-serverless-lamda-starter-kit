import { Field, ObjectType } from 'type-graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, Index, In, Generated, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';

import { EntityBase } from './base.entity';
import { OptionGroup } from './option-group.schema';
import { IOption } from '../models/option.model';

@ObjectType()
@Entity()
export class Option implements IOption {
    
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
