import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  @InjectRepository(ReviewRepository)
  private readonly reviewRepository: ReviewRepository;
}
