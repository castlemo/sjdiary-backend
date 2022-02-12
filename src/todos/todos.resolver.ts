import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0User, GqlAuthGuard, IAuth0User } from '../auth';
import { Todo } from '../models';

import {
  CreateTodoInput,
  DeleteTodoInput,
  TodosInput,
  UpdateTodoInput,
} from './dto/input';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todoService: TodosService) {}

  @Query(() => [Todo])
  @UseGuards(GqlAuthGuard)
  async todos(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: TodosInput,
  ) {
    return await this.todoService.todos(authUser, input);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async createTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: CreateTodoInput,
  ) {
    const newTodo = await this.todoService.createTodo(authUser, input);
    console.log({ newTodo });
    return newTodo;
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async updateTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: UpdateTodoInput,
  ) {
    return await this.todoService.updateTodo(authUser, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteTodo(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: DeleteTodoInput,
  ) {
    return await this.todoService.deleteTodo(authUser, input);
  }
}
