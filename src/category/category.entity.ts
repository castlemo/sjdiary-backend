import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { Todo } from '../todo/todo.entity';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  color: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Int)
  createdAt: number;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Int)
  updatedAt: number;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: number;

  @ManyToOne(() => User, (user: User) => user.Categories)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  User: User;

  @OneToMany(() => Todo, (todo) => todo.Category)
  @Field(() => [Todo])
  Todos: Todo[];
}
