import { Field, InputType } from '@nestjs/graphql';
import { Todo } from '../../todo.model';

@InputType()
export class CreateTodoInput
  implements Pick<Todo, 'contents' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  contents: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;
}
