import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';
import { dateTransformer } from '../utils';

import { CommonEntity } from './common.entity';

@Entity({
  name: 'review',
})
export class ReviewEntity extends CommonEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
