import { Field, InputType } from '@nestjs/graphql';

import { Todo } from '../../../models';

@InputType()
export class CreateTodoInput
  implements Pick<Todo, 'content' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Date, { nullable: true })
  startedAt?: number;

  @Field(() => Date, { nullable: true })
  finishedAt?: number;
}
