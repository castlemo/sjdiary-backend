import { Field, InputType, Int } from '@nestjs/graphql';
import { MinLength, MaxLength, Min } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String)
  @MinLength(1, {
    message: 'contents is too short',
  })
  @MaxLength(23, {
    message: 'contents is too long',
  })
  contents: string;

  @Field(() => Int)
  @Min(1)
  startedAt: number;

  @Field(() => Int)
  @Min(1)
  finishedAt: number;
}
