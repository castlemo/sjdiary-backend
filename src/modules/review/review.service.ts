import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { IAuthUser } from 'src/auth';
import { UserRepository } from '../user';

import {
  CreateReviewInput,
  DeleteReviewInput,
  ReviewsInput,
  UpdateReviewInput,
} from './dto/input';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  @InjectRepository(ReviewRepository)
  private readonly reviewRepo: ReviewRepository;
  @InjectRepository(UserRepository)
  private readonly userRepo: UserRepository;

  async reviews(authUser: IAuthUser, { startDate, endDate }: ReviewsInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return this.reviewRepo.find({
      where: {
        user,
        startedAt: MoreThanOrEqual(startDate),
        endedAt: LessThanOrEqual(endDate),
        deletedAt: IsNull(),
      },
      order: {
        startedAt: 'ASC',
      },
    });
  }

  async createReview(authUser: IAuthUser, input: CreateReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.save({
      user,
      ...input,
    });
  }

  async updateReview(authUser: IAuthUser, input: UpdateReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.save({
      user,
      ...input,
    });
  }

  async deleteReview(authUser: IAuthUser, { reviewId }: DeleteReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.softDelete({ user, id: reviewId });
  }
}
