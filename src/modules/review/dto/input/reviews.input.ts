import { Field, InputType } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class ReviewsInput {
  @Field(() => Date)
  @Min(1)
  startDate: number;

  @Field(() => Date)
  @Min(1)
  endDate: number;
}
