import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from '../category/category.module';
import { UserModule } from '../user/user.module';
import { TodoPeriodModule } from '../todo-period/todo-period.module';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
    CategoryModule,
    UserModule,
    TodoPeriodModule,
  ],
  providers: [TodoService, TodoResolver],
  exports: [TypeOrmModule],
})
export class TodoModule {}
