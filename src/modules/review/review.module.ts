import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReviewRepository } from './review.repository';
import { ReviewResolver } from './review.resolver';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewRepository])],
  providers: [ReviewResolver, ReviewService],
})
export class ReviewModule {}
