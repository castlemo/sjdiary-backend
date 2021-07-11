import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';

import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { Category } from './entity';
@Module({
  imports: [TypeOrmModule.forFeature([Category]), UserModule],
  providers: [CategoryResolver, CategoryService],
  exports: [TypeOrmModule],
})
export class CategoryModule {}
