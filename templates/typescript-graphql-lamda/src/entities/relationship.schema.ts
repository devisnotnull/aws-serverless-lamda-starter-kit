import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, Generated, Index, OneToMany, ManyToMany, JoinTable } from 'typeorm';

import { Tag } from './tags.schema'

@ObjectType()
@Entity()
export class RelationshipItem {

    @PrimaryGeneratedColumn('increment')
    @Field(type => Number)
    id?: number;

    @Generated('uuid')
    @Column()
    @Field(type => String)
    uuid: string;

    @Column()
    @Index()
    @Field(type => String)
    parentType: string;

    @Index()
    @Column()
    @Field(type => String)
    parentUuid: string;

    @Column()
    @Index()
    @Field(type => String, { defaultValue: 'default' })
    brand: string;

    @Column()
    @Index()
    @Field(type => String, { defaultValue: 'default' })
    locale: string;

    @Column()
    @Field(type => Number, { defaultValue: 0 })
    weight: number;

    @Column()
    @Field(type => String)
    relationshipType: string;

    @Column()
    @Field(type => String)
    childUuid: string;

    // Tags relationship would go here 

    @ManyToMany(type => Tag)
    @JoinTable()
    tags: Tag[];
}
