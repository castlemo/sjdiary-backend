import { Field, ObjectType } from '@nestjs/graphql';

import { CommonEntity, TodoEntity } from '../entities';

@ObjectType()
export class Todo extends CommonEntity implements Omit<TodoEntity, 'user'> {
  @Field(() => String)
  contents: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;

  @Field(() => Date, { nullable: true })
  completedAt?: number;
}
