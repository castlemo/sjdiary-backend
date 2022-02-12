import { Field, Float, InputType } from '@nestjs/graphql';

import { Review } from '../../../models';

@InputType()
export class CreateReviewInput
  implements Pick<Review, 'content' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Float, { nullable: true })
  startedAt?: number;

  @Field(() => Float, { nullable: true })
  finishedAt?: number;
}
