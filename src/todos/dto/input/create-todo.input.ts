import { Field, Float, InputType } from '@nestjs/graphql';

import { Todo } from '../../../models';

@InputType()
export class CreateTodoInput
  implements Pick<Todo, 'content' | 'startedAt' | 'finishedAt'>
{
  @Field(() => String)
  content: string;

  @Field(() => Float, { nullable: true })
  startedAt?: number;

  @Field(() => Float, { nullable: true })
  finishedAt?: number;
}
