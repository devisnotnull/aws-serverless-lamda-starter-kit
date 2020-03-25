import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class EntityBase {
    @PrimaryGeneratedColumn("uuid") public uuid: string = "";
    @CreateDateColumn() public created: Date = new Date();
    @UpdateDateColumn() public updated: Date = new Date();
    @Column() public inactive: boolean = false;
  }