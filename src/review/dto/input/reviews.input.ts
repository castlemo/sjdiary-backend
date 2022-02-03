import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ReviewsInput {
  @Field(() => Date)
  startDate: number;

  @Field(() => Date)
  endDate: number;
}
