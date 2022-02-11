"use strict";

import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'photos' })
export class Photos extends Model<Photos> {
  @PrimaryKey
  @Column({
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  })
  id!: number;

  @Column
  title!: string;

  @Column
  photoUrl!: string;

  @Column
  description!: string;

  @Column
  shortDescription!: string;

  @Column
  createdAt?: Date;
  
  @Column
  updatedAt?: Date;
}
