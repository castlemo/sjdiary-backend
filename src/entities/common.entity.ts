import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { dateTransformer } from '../utils';
@ObjectType()
export abstract class CommonEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Field(() => Float)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    transformer: dateTransformer,
  })
  createdAt: number;

  @Field(() => Float)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    transformer: dateTransformer,
  })
  updatedAt: number;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    transformer: dateTransformer,
  })
  deletedAt: number;
}
