import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class DeleteReviewInput {
  @Field(() => ID)
  reviewId: number;
}
