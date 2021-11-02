import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import {
  Auth0UserInterface,
  CurrentUser,
  GqlAuthGuard,
} from '../auth/auth.guard';

import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodoInput, UpdateTodoInput, GetTodosInput } from './input';
import { TodoType } from './todo.enum';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => Todo)
  @UseGuards(GqlAuthGuard)
  async getTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('todoId') todoId: number,
  ): Promise<Todo> {
    return await this.todoService.getTodo(currentUser, todoId);
  }

  @Query(() => [Todo])
  @UseGuards(GqlAuthGuard)
  async getTodos(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') input: GetTodosInput,
  ): Promise<Todo[]> {
    return await this.todoService.getTodos(currentUser, input);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async createTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') input: CreateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.createTodo(currentUser, input);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async updateTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') input: UpdateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(currentUser, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('todoId', { type: () => Int }) todoId: number,
  ): Promise<boolean> {
    return await this.todoService.deleteTodo(currentUser, todoId);
  }
}
