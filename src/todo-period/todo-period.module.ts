import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoPeriod } from './entity/todo-period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoPeriod])],
  exports: [TypeOrmModule],
})
export class TodoPeriodModule {}
