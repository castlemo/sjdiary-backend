import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';

import { CommonEntity } from './common.entity';

@Entity({
  name: 'review',
})
export class ReviewEntity extends CommonEntity {
  @Column({
    type: 'text',
  })
  contents: string;

  @Column({ name: 'started_at', type: 'timestamp', nullable: true })
  startedAt?: number;

  @Column({ name: 'finished_at', type: 'timestamp', nullable: true })
  finishedAt?: number;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
