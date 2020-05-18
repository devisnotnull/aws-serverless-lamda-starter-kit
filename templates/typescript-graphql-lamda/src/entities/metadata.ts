import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, Generated, Index, CreateDateColumn } from 'typeorm';

import { EntityBase } from './base.entity';

@ObjectType()
@Entity()
export class MetaData {
    @PrimaryGeneratedColumn('increment')
    @Field(type => Number)
    id?: number;

    @Generated('uuid')
    @Column()
    @Index({ unique: true })
    @Field(type => String)
    uuid: string;

    @Column()
    @CreateDateColumn({ type: 'date' })
    created?: Date;

    @Column()
    @Field(type => String)
    entity: string;

    @Column()
    @Field(type => String)
    entityId: string;

    @Column()
    @Field(type => String)
    key: string;

    @Column()
    @Field(type => String)
    value: string;
}
