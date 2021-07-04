import { TodoPeriod } from './../../todo-period/entity/todo-period.entity';
import { User } from './../../user/entity/user.entity';
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
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entity/category.entity';

@Entity()
@ObjectType()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  @Field()
  contents: string;

  @Column({ name: 'all_index' })
  @Field(() => Int)
  allIndex: number;

  @Column({ name: 'today_index', nullable: true })
  @Field(() => Int)
  todayIndex: number;

  @Column({ name: 'category_index', nullable: true })
  @Field(() => Int)
  categoryIndex: number;

  @Column({ name: 'todo_period_id', nullable: true })
  todoPeriodId: number;

  @Column({ name: 'category_id', nullable: true })
  categoryId: number;

  @Column({ name: 'checked_at', type: 'timestamp', nullable: true })
  @Field(() => Int)
  checkedAt: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Int)
  createdAt: number;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Int)
  updatedAt: number;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: number;

  @ManyToOne(() => User, (user) => user.Todos)
  @JoinColumn({ name: 'user_id' })
  User: User;

  @OneToOne(() => TodoPeriod, (todoPeriod) => todoPeriod.Todo)
  @JoinColumn({ name: 'todo_period_id' })
  TodoPeriod: TodoPeriod;

  @ManyToOne(() => Category, (category) => category.Todos)
  @JoinColumn({ name: 'category_id' })
  @Field(() => Category)
  Category: Category;
}
