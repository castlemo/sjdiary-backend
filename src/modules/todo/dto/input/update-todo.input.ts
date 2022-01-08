import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, { nullable: true })
  completedAt: number;
}
