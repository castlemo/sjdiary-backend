import { Field, ObjectType } from '@nestjs/graphql';

import { CommonEntity, ReviewEntity } from 'src/entities';

@ObjectType()
export class Review extends CommonEntity implements Omit<ReviewEntity, 'user'> {
  @Field(() => String)
  contents: string;

  @Field(() => Date)
  startedAt: number;

  @Field(() => Date)
  finishedAt: number;
}
