import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Todo } from './../../todo/entity/todo.entity';

@Entity()
@ObjectType()
export class TodoPeriod extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'todo_id' })
  todoId: number;

  @Column({ name: 'started_at', type: 'timestamp' })
  @Field(() => Date)
  startedAt: Date;

  @Column({ name: 'ended_at', type: 'timestamp' })
  @Field(() => Date)
  endedAt: Date;

  @OneToOne(() => Todo, (todo: Todo) => todo.TodoPeriod)
  @JoinColumn({ name: 'todo_id' })
  @Field(() => Todo)
  Todo: Todo;
}
