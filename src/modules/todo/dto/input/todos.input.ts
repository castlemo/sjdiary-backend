import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodosInput {
  @Field(() => Date)
  startDate: number;

  @Field(() => Date)
  endDate: number;
}
