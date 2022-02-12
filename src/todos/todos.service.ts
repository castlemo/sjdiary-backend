import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import { IsNull, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { IAuth0User } from '../auth';
import { UsersRepository } from '../users';

import {
  CreateTodoInput,
  DeleteTodoInput,
  TodosInput,
  UpdateTodoInput,
} from './dto/input';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  @InjectRepository(TodosRepository)
  private readonly todoRepo: TodosRepository;
  @InjectRepository(UsersRepository)
  private readonly userRepo: UsersRepository;

  async todos(authUser: IAuth0User, { startDate, endDate }: TodosInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.todoRepo.find({
      where: [
        {
          user,
          startedAt: MoreThanOrEqual(startDate),
          deletedAt: IsNull(),
        },
        {
          user,
          finishedAt: LessThanOrEqual(endDate),
          deletedAt: IsNull(),
        },
        {
          user,
          startedAt: IsNull(),
          finishedAt: IsNull(),
          deletedAt: IsNull(),
        },
      ],
    });
  }

  async createTodo(authUser: IAuth0User, input: CreateTodoInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    const unSetTimeTodos = await this.todoRepo.find({
      where: {
        user,
        startedAt: IsNull(),
        finishedAt: IsNull(),
        deletedAt: IsNull(),
      },
    });

    if (3 < unSetTimeTodos.length) {
      throw new ApolloError('does not create todo');
    }

    return await this.todoRepo.save({
      user,
      ...input,
    });
  }

  async updateTodo(authUser: IAuth0User, input: UpdateTodoInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    if (Object.keys(input).length < 1) {
      throw new ApolloError('input is empty');
    }

    console.log(typeof input.finishedAt);

    const todo = await this.todoRepo.findOne({
      user,
      id: input.id,
    });

    if (input.content) {
      todo.content = input.content;
    }

    if (input.completedAt) {
      todo.completedAt = input.completedAt;
    }

    if (input.startedAt) {
      todo.startedAt = input.startedAt;
    }

    if (input.finishedAt) {
      todo.finishedAt = input.finishedAt;
    }

    return await this.todoRepo.save(todo);
  }

  async deleteTodo(authUser: IAuth0User, { todoId }: DeleteTodoInput) {
    try {
      const user = await this.userRepo.findByAuth0Id(authUser.sub);

      await this.todoRepo.softDelete({ user, id: todoId });

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
