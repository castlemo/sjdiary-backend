import { Field, InputType } from '@nestjs/graphql';
import { MinLength, MaxLength, Min } from 'class-validator';
import { Todo } from '../../todo.model';

@InputType()
export class CreateTodoInput
  implements Pick<Todo, 'contents' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  @MinLength(1, {
    message: 'contents is too short',
  })
  @MaxLength(23, {
    message: 'contents is too long',
  })
  contents: string;

  @Field(() => Date)
  @Min(1)
  startedAt: number;

  @Field(() => Date)
  @Min(1)
  finishedAt: number;
}
