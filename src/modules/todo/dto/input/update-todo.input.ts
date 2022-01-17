import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => String, { nullable: true })
  contents?: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;

  @Field(() => Date, { nullable: true })
  completedAt?: number;
}
