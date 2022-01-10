import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';

import { TodoEntity, ReviewEntity } from '../entities';

import { CommonEntity } from './common.entity';

const USER = 'user';

@ObjectType(USER)
@Entity({
  name: USER,
})
export class UserEntity extends CommonEntity {
  @Column({ name: 'auth0_id' })
  auth0Id: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  profileImageUrl: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user)
  todos: TodoEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: ReviewEntity[];
}
