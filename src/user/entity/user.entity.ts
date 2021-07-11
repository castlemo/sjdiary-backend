import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Todo } from './../../todo/entity/todo.entity';
import { UserSetting } from '../../user-setting/entity/user-setting.entity';
import { Category } from '../../category/entity/category.entity';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'auth0_id', unique: true })
  auth0Id: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  motto: string;

  @Column({ name: 'profile_image_url', nullable: true })
  @Field()
  profileImageUrl: string;

  @Column({ name: 'tutorial_cleared_at', type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  tutorialClearedAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @OneToOne((type) => UserSetting, (userSetting) => userSetting.User)
  @Field(() => UserSetting)
  UserSetting: UserSetting;

  @OneToMany((type) => Todo, (todo) => todo.User)
  @Field(() => [Todo])
  Todos: Todo[];

  @OneToMany((type) => Category, (category) => category.User)
  @Field(() => [Category])
  Categories: Category[];
}
