import { Field, InputType } from '@nestjs/graphql';
import { Review } from '../../review.model';

@InputType()
export class CreateReviewInput
  implements Pick<Review, 'contents' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  contents: string;

  @Field(() => Date)
  startedAt?: number;

  @Field(() => Date)
  finishedAt?: number;
}
