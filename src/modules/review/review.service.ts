import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import { IsNull, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { IAuth0User } from '../../auth';
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

  async reviews(authUser: IAuth0User, { startDate, endDate }: ReviewsInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return this.reviewRepo.find({
      where: {
        user,
        startedAt: MoreThanOrEqual(startDate),
        finishedAt: LessThanOrEqual(endDate),
        deletedAt: IsNull(),
      },
    });
  }

  async createReview(authUser: IAuth0User, input: CreateReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.save({
      user,
      ...input,
    });
  }

  async updateReview(authUser: IAuth0User, input: UpdateReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    if (Object.keys(input).length < 1) {
      throw new ApolloError('This input is empty');
    }

    return await this.reviewRepo.save({
      user,
      ...input,
    });
  }

  async deleteReview(authUser: IAuth0User, { reviewId }: DeleteReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.softDelete({ user, id: reviewId });
  }
}
