import { Field, ObjectType } from '@nestjs/graphql';

import { CommonEntity } from '../entities';

@ObjectType()
export class Todo extends CommonEntity {
  @Field(() => String)
  content: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;

  @Field(() => Date, { nullable: true })
  completedAt?: number;
}
