import { Field, InputType } from '@nestjs/graphql';

import { Review } from '../../review.model';

@InputType()
export class CreateReviewInput
  implements Pick<Review, 'contents' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  contents: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;
}
