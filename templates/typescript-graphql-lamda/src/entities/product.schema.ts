import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index, Generated, CreateDateColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { IProductModel } from '../models/product.model';

@ObjectType()
@Entity()
export class Product implements IProductModel {
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
