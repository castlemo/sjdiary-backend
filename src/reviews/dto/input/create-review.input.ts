import { Field, InputType } from '@nestjs/graphql';

import { Review } from '../../../models';

@InputType()
export class CreateReviewInput
  implements Pick<Review, 'content' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;
}
