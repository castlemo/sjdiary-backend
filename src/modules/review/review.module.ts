import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user';

import { ReviewRepository } from './review.repository';
import { ReviewResolver } from './review.resolver';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewRepository]), UserModule],
  providers: [ReviewResolver, ReviewService],
  exports: [TypeOrmModule],
})
export class ReviewModule {}
