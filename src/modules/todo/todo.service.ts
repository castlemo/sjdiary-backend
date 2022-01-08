import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { IAuthUser } from 'src/auth';
import { UserRepository } from '../user';

import {
  TodosInput,
  CreateTodoInput,
  UpdateTodoInput,
  DeleteTodoInput,
} from './dto/input';
import { TodoRepository } from './todo.repository';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class TodoService {
  @InjectRepository(TodoRepository)
  private readonly todoRepo: TodoRepository;
  @InjectRepository(UserRepository)
  private readonly userRepo: UserRepository;

  async todos(authUser: IAuthUser, { startDate, endDate }: TodosInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return this.todoRepo.find({
      where: {
        user,
        startedAt: MoreThanOrEqual(startDate),
        endedAt: LessThanOrEqual(endDate),
        deletedAt: IsNull(),
      },
      order: {
        startedAt: 'ASC',
      },
    });
  }

  async createTodo(authUser: IAuthUser, input: CreateTodoInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.todoRepo.save({
      user,
      ...input,
    });
  }

  async updateTodo(authUser: IAuthUser, input: UpdateTodoInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    if (Object.keys(input).length < 1) {
      throw new ApolloError('This input is empty');
    }

    return await this.todoRepo.save({
      user,
      ...input,
    });
  }

  async deleteTodo(authUser: IAuthUser, { todoId }: DeleteTodoInput) {
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
