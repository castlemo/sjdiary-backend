import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0User, GqlAuthGuard } from '../../auth';

import { IAuth0User } from './../../auth/auth.interface';
import {
  CreateTodoInput,
  DeleteTodoInput,
  TodosInput,
  UpdateTodoInput,
} from './dto/input';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  @UseGuards(GqlAuthGuard)
  async todos(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: TodosInput,
  ) {
    return this.todoService.todos(authUser, input);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async createTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: CreateTodoInput,
  ) {
    return this.todoService.createTodo(authUser, input);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async updateTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: UpdateTodoInput,
  ) {
    return this.todoService.updateTodo(authUser, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: DeleteTodoInput,
  ) {
    return this.todoService.deleteTodo(authUser, input);
  }
}
