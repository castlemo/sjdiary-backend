import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class TodosInput {
  @Field(() => Int)
  @Min(1)
  startDate: number;

  @Field(() => Int)
  @Min(1)
  endDate: number;
}
