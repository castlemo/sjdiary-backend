import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => ID)
  id: number;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;

  @Field(() => Date, { nullable: true })
  completedAt?: number;
}
