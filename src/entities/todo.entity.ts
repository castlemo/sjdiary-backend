import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';

import { CommonEntity } from './common.entity';

const TODO = 'todo';

@ObjectType(TODO)
@Entity({
  name: TODO,
})
export class TodoEntity extends CommonEntity {
  @Field(() => String)
  @Column({
    type: 'text',
  })
  contents: string;

  @Field(() => Int)
  @Column({ name: 'started_at', type: 'timestamp' })
  startedAt: number;

  @Field(() => Int)
  @Column({ name: 'finished_at', type: 'timestamp' })
  finishedAt: number;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'completed_at', type: 'timestamp', nullable: true })
  completedAt: number;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
