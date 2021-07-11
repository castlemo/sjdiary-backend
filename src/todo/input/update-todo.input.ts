import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field({ nullable: true })
  contents: string;

  @Field(() => Int, { nullable: true })
  categoryId: number;

  @Field(() => Int, { nullable: true })
  todoPeriodId: number;

  @Field(() => Boolean, { nullable: true })
  isTime: boolean;

  @Field(() => Date, { nullable: true })
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt: Date;
}
