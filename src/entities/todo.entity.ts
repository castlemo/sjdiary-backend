import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';

import { CommonEntity } from './common.entity';

@Entity({
  name: 'todo',
})
export class TodoEntity extends CommonEntity {
  @Column({
    type: 'text',
  })
  contents: string;

  @Column({ name: 'started_at', type: 'timestamp' })
  startedAt: number;

  @Column({ name: 'finished_at', type: 'timestamp' })
  finishedAt: number;

  @Column({ name: 'completed_at', type: 'timestamp', nullable: true })
  completedAt: number;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
