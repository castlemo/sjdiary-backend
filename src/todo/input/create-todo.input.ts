import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  contents: string;

  @Field(() => Int, { nullable: true })
  categoryId: number;

  @Field(() => Boolean, { nullable: true })
  isTime: boolean;

  @Field(() => Date, { nullable: true })
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt: Date;
}
