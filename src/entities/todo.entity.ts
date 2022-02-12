import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';
import { dateTransformer } from '../utils';

import { CommonEntity } from './common.entity';

@Entity({
  name: 'todo',
})
export class TodoEntity extends CommonEntity {
  @Column()
  content: string;

  @Column({
    name: 'started_at',
    type: 'timestamp',
    nullable: true,
    transformer: dateTransformer,
  })
  startedAt?: number;

  @Column({
    name: 'finished_at',
    type: 'timestamp',
    nullable: true,
    transformer: dateTransformer,
  })
  finishedAt?: number;

  @Column({
    name: 'completed_at',
    type: 'timestamp',
    nullable: true,
    transformer: dateTransformer,
  })
  completedAt?: number;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
