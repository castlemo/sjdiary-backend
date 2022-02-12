import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '../users';

import { ReviewsRepository } from './reviews.repository';
import { ReviewsResolver } from './reviews.resolver';
import { ReviewsService } from './reviews.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewsRepository]), UsersModule],
  providers: [ReviewsResolver, ReviewsService],
  exports: [TypeOrmModule],
})
export class ReviewsModule {}
