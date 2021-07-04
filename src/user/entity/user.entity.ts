import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID, registerEnumType, Int } from '@nestjs/graphql';

import { Todo } from './../../todo/entity/todo.entity';
import { UserSetting } from '../../user-setting/entity/user-setting.entity';
import { Category } from '../../category/entity/category.entity';

enum Platform {
  GOOGLE = 'google',
}

registerEnumType(Platform, {
  name: 'Platform',
});

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column({ type: 'enum', enum: Platform })
  @Field(() => Platform)
  platform: Platform;

  @Column({ name: 'platform_id' })
  platformId: string;

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

  @Column({ name: 'user_setting_id' })
  userSettingId: number;

  @Column({ name: 'tutorial_cleared_at', type: 'timestamp', nullable: true })
  @Field(() => Int)
  tutorialClearedAt: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Int)
  createdAt: number;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Int)
  updatedAt: number;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: number;

  @OneToOne((type) => UserSetting, (userSetting) => userSetting.User)
  @JoinColumn({ name: 'user_setting_id' })
  @Field(() => UserSetting)
  UserSetting: UserSetting;

  @OneToMany((type) => Todo, (todo) => todo.User)
  @Field(() => [Todo])
  Todos: Todo[];

  @OneToMany((type) => Category, (category) => category.User)
  @Field(() => [Category])
  Categories: Category[];
}
