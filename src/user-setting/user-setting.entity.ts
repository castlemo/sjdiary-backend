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
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { Theme, StartOfWeek } from './user-setting.enum';

@Entity()
@ObjectType()
export class UserSetting extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ type: 'enum', enum: Theme, default: Theme.DARK })
  @Field(() => Theme)
  theme: Theme;

  @Column({
    name: 'start_of_week',
    type: 'enum',
    enum: StartOfWeek,
    default: StartOfWeek.SUNDAY,
  })
  @Field(() => StartOfWeek)
  startOfWeek: StartOfWeek;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.UserSetting)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  User: User;
}
