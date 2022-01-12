import { Column, Entity, OneToMany } from 'typeorm';

import { TodoEntity, ReviewEntity } from '../entities';

import { CommonEntity } from './common.entity';

@Entity({
  name: 'user',
})
export class UserEntity extends CommonEntity {
  @Column({ name: 'auth0_id' })
  auth0Id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  profileImageUrl: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user)
  todos: TodoEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: ReviewEntity[];
}
