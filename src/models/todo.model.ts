import { Field, Float, ObjectType } from '@nestjs/graphql';

import { CommonEntity } from '../entities';

@ObjectType()
export class Todo extends CommonEntity {
  @Field(() => String)
  content: string;

  @Field(() => Float, { nullable: true })
  startedAt?: number;

  @Field(() => Float, { nullable: true })
  finishedAt?: number;

  @Field(() => Float, { nullable: true })
  completedAt?: number;
}
