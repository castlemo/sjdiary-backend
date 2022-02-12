import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '../users';

import { TodosRepository } from './todos.repository';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodosRepository]), UsersModule],
  providers: [TodosResolver, TodosService],
  exports: [TypeOrmModule],
})
export class TodosModule {}
