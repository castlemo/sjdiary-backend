import { Args, Mutation, Resolver } from '@nestjs/graphql';

import {
  Auth0UserInterface,
  CurrentUser,
  GqlAuthGuard,
} from '../auth/auth.guard';

import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './input';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

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
