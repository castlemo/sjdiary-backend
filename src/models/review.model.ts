import { Field, Float, ObjectType } from '@nestjs/graphql';

import { CommonEntity, ReviewEntity } from '../entities';

@ObjectType()
export class Review
  extends CommonEntity
  implements Omit<ReviewEntity, 'user' | 'deletedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Float, { nullable: true })
  startedAt?: number;

  @Field(() => Float, { nullable: true })
  finishedAt?: number;
}
