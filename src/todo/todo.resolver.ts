import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import {
  Auth0UserInterface,
  CurrentUser,
  GqlAuthGuard,
} from '../auth/auth.guard';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './input';
import { GetTodosTypeInput } from './enum/todo.enum';

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
    @Args('type', { type: () => GetTodosTypeInput }) type: GetTodosTypeInput,
    @Args('categoryId', { nullable: true }) categoryId?: number,
  ): Promise<Todo[]> {
    return await this.todoService.getTodos(currentUser, type, categoryId);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async createTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('input') createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.createTodo(currentUser, createTodoInput);
  }

  @Mutation(() => Todo)
  @UseGuards(GqlAuthGuard)
  async updateTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('todoId') todoId: number,
    @Args('input') updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    return await this.todoService.updateTodo(
      currentUser,
      todoId,
      updateTodoInput,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteTodo(
    @CurrentUser() currentUser: Auth0UserInterface,
    @Args('todoId') todoId: number,
  ): Promise<boolean> {
    return await this.todoService.deleteTodo(currentUser, todoId);
  }
}
