import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';
import { ApolloError } from 'apollo-server-express';

import { User } from '../user/entity/user.entity';
import { Category } from '../category/entity/category.entity';
import { Auth0UserInterface } from '../auth/auth.guard';
import { TodoPeriod } from '../todo-period/entity/todo-period.entity';

import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './input';

@Injectable()
export class TodoService {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  @InjectRepository(Category)
  private readonly categoryRepo: Repository<Category>;

  @InjectRepository(Todo)
  private readonly todoRepo: Repository<Todo>;

  @InjectRepository(TodoPeriod)
  private readonly todoPeriodRepo: Repository<TodoPeriod>;

  constructor(private readonly connection: Connection) {}

  async createTodo(
    currentUser: Auth0UserInterface,
    createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    const queryRunner: QueryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const _user = await this.userRepo.findOne({
        auth0Id: currentUser.sub,
        deletedAt: null,
      });

      if (!_user) {
        throw new ApolloError('[createTodo] this user Not Exist');
      }
      const createTodo = {
        User: _user,
        contents: createTodoInput.contents,
        allIndex: null,
        categoryIndex: null,
        Category: null,
        TodoPeriod: null,
      };

      if (createTodoInput.categoryId) {
        const category = await this.categoryRepo.findOne({
          User: _user,
          id: createTodoInput.categoryId,
          deletedAt: null,
        });

        if (!category) {
          throw new ApolloError('[createTodo] this category Not Exist');
        }

        createTodo.Category = category;

        const categoryTodoCount = await this.todoRepo.count({
          where: {
            User: _user,
            Category: category,
            deletedAt: null,
          },
        });

        createTodo.categoryIndex = categoryTodoCount;
      }

      const todoCount = await this.todoRepo.count({
        where: { User: _user, deletedAt: null },
      });

      createTodo['allIndex'] = todoCount;

      const _todo = this.todoRepo.create(createTodo);
      const todo = await queryRunner.manager.save(_todo);

      // period 설정을 한경우
      if (
        !!createTodoInput.isTime &&
        !!createTodoInput.startedAt &&
        !!createTodoInput.endedAt
      ) {
        const _todoPeriod = this.todoPeriodRepo.create({
          Todo: todo,
          isTime: createTodoInput.isTime,
          startedAt: createTodoInput.startedAt,
          endedAt: createTodoInput.endedAt,
        });

        const todoPeriod = await queryRunner.manager.save(_todoPeriod);

        todo.TodoPeriod = todoPeriod;
      }

      await queryRunner.commitTransaction();

      return todo;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      if (err instanceof ApolloError) {
        throw err;
      } else {
        throw new ApolloError(err);
      }
    } finally {
      await queryRunner.release();
    }
  }

  async updateTodo(
    currentUser: Auth0UserInterface,
    todoId: number,
    updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    const queryRunner: QueryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = await this.userRepo.findOne({
        auth0Id: currentUser.sub,
        deletedAt: null,
      });

      if (!user) {
        throw new ApolloError('[updateTodo] this user Not Exist');
      }

      const _todo = await this.todoRepo.findOne({
        where: {
          User: user,
          id: todoId,
          deletedAt: null,
        },
      });

      if (!_todo) {
        throw new ApolloError('[updateTodo] this todo Not Exist');
      }

      if (updateTodoInput.contents) {
        _todo.contents = updateTodoInput.contents;
      }
      if (updateTodoInput.categoryId) {
        const category = await this.categoryRepo.findOne({
          where: {
            User: user,
            id: updateTodoInput.categoryId,
            deletedAt: null,
          },
        });

        _todo.Category = category;
      }

      if (updateTodoInput.todoPeriodId) {
        const _todoPeriod = await this.todoPeriodRepo.findOne({
          Todo: _todo,
          id: updateTodoInput.todoPeriodId,
        });

        if (!!updateTodoInput.isTime) {
          _todoPeriod.isTime = updateTodoInput.isTime;
        }

        if (!!updateTodoInput.startedAt) {
          _todoPeriod.startedAt = updateTodoInput.startedAt;
        }

        if (!!updateTodoInput.endedAt) {
          _todoPeriod.endedAt = updateTodoInput.endedAt;
        }

        const todoPeriod = await queryRunner.manager.save(_todoPeriod);

        _todo.TodoPeriod = todoPeriod;
      }

      const todo = await queryRunner.manager.save(_todo);

      await queryRunner.commitTransaction();

      return todo;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      if (err instanceof ApolloError) {
        throw err;
      } else {
        throw new ApolloError(err);
      }
    } finally {
      await queryRunner.release();
    }
  }

  async deleteTodo(
    currentUser: Auth0UserInterface,
    todoId: number,
  ): Promise<boolean> {
    const user = await this.userRepo.findOne({
      auth0Id: currentUser.sub,
      deletedAt: null,
    });

    if (!user) {
      throw new ApolloError('[deleteTodo] this user Not Exist');
    }

    const _todo = await this.todoRepo.findOne({
      where: {
        User: user,
        id: todoId,
        deletedAt: null,
      },
    });

    if (!_todo) {
      throw new ApolloError('[deleteTodo] this todo Not Exist');
    }

    await this.todoRepo.softDelete(_todo.id);

    return true;
  }

  async getTodo(
    currentUser: Auth0UserInterface,
    todoId: number,
  ): Promise<Todo> {
    const user = await this.userRepo.findOne({
      where: { auth0Id: currentUser.sub, deletedAt: null },
    });

    if (!user) {
      throw new ApolloError('[getTodo] this user Not Exist');
    }

    const todo = await this.todoRepo.findOne({
      where: {
        User: user,
        id: todoId,
        deletedAt: null,
      },
      join: {
        alias: 'todo',
        leftJoinAndSelect: {
          TodoPeriod: 'todo.TodoPeriod',
        },
      },
    });

    if (!todo) {
      throw new ApolloError('[getTodo] this todo Not Exist');
    }

    return todo;
  }

  async getTodos(currentUser: Auth0UserInterface): Promise<Todo[]> {
    const user = await this.userRepo.findOne({
      where: { auth0Id: currentUser.sub, deletedAt: null },
    });

    if (!user) {
      throw new ApolloError('[getTodo] this user Not Exist');
    }

    const todos = await this.todoRepo.find({
      where: {
        User: user,
        deletedAt: null,
      },
      join: {
        alias: 'todo',
        leftJoinAndSelect: {
          TodoPeriod: 'todo.TodoPeriod',
        },
      },
    });

    if (!todos) {
      throw new ApolloError('[getTodo] this todos Not Exist');
    }

    return todos;
  }
}
