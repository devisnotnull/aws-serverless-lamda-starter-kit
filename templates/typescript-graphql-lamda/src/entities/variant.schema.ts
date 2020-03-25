import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, Generated, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';

import { IVariantModel } from '../models/variant.model';

@ObjectType()
@Entity()
export class Variant implements IVariantModel {

    @PrimaryGeneratedColumn('increment')
    @Field(type => Number)
    id?: number;
    
    @Column()
    @CreateDateColumn({ type:'date' })
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
