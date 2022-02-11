import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'photos' })
export class Photos extends Model<Photos> {
  @PrimaryKey
  @Column
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
