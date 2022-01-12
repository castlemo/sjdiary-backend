import { Field, ObjectType } from '@nestjs/graphql';

import { TodoEntity, CommonEntity } from 'src/entities';

@ObjectType()
export class Todo extends CommonEntity implements Omit<TodoEntity, 'user'> {
  @Field(() => String)
  contents: string;

  @Field(() => Date)
  startedAt: number;

  @Field(() => Date)
  finishedAt: number;

  @Field(() => Date, { nullable: true })
  completedAt: number;
}
