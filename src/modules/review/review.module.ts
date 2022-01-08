import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '../user';

import { ReviewRepository } from './review.repository';
import { ReviewResolver } from './review.resolver';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewRepository, UserRepository])],
  providers: [ReviewResolver, ReviewService],
})
export class ReviewModule {}
