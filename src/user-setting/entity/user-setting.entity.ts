import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID, registerEnumType, Int } from '@nestjs/graphql';

import { User } from '../../user/entity/user.entity';

enum Theme {
  DARK = 'dark',
  WHITE = 'white',
}

enum StartOfWeek {
  MONDAY = 'monday',
  SUNDAY = 'sunday',
}

registerEnumType(Theme, {
  name: 'Theme',
});

registerEnumType(StartOfWeek, {
  name: 'StartOfWeek',
});

@Entity()
@ObjectType()
export class UserSetting extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ type: 'enum', enum: Theme, default: 'dark' })
  @Field(() => Theme)
  theme: Theme;

  @Column({
    name: 'start_of_week',
    type: 'enum',
    enum: StartOfWeek,
    default: 'sunday',
  })
  @Field(() => StartOfWeek)
  startOfWeek: StartOfWeek;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Int)
  createdAt: number;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Int)
  updatedAt: number;

  @OneToOne((type) => User, (user) => user.UserSetting)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  User: User;
}
