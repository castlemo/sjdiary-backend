import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { UserEntity } from '../entities';

import { CommonEntity } from './common.entity';

const REVIEW = 'review';

@ObjectType(REVIEW)
@Entity({
  name: REVIEW,
})
export class ReviewEntity extends CommonEntity {
  @Field(() => String)
  @Column({
    type: 'text',
  })
  contents: string;

  @Field(() => Date)
  @Column({ name: 'started_at', type: 'timestamp' })
  startedAt: number;

  @Field(() => Date)
  @Column({ name: 'finished_at', type: 'timestamp' })
  finishedAt: number;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
