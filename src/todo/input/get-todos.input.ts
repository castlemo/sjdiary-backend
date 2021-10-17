import { InputType, Field, Int } from '@nestjs/graphql';
import { TodoType } from '../todo.enum';

@InputType()
export class GetTodosInput {
  @Field(() => TodoType)
  type: TodoType;

  @Field(() => Int, { nullable: true })
  categoryId?: number;
}
