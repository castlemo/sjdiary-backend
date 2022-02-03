import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user';

import { TodoRepository } from './todo.repository';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository]), UserModule],
  providers: [TodoResolver, TodoService],
  exports: [TypeOrmModule],
})
export class TodoModule {}
