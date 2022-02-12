import { Field, ObjectType } from '@nestjs/graphql';

import { CommonEntity, ReviewEntity } from '../entities';

@ObjectType()
export class Review
  extends CommonEntity
  implements Omit<ReviewEntity, 'user' | 'deletedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;
}
