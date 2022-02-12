import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import { IsNull, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { IAuth0User } from '../auth';
import { UsersRepository } from '../users';

import {
  CreateReviewInput,
  DeleteReviewInput,
  ReviewsInput,
  UpdateReviewInput,
} from './dto/input';
import { ReviewsRepository } from './reviews.repository';

@Injectable()
export class ReviewsService {
  @InjectRepository(ReviewsRepository)
  private readonly reviewRepo: ReviewsRepository;
  @InjectRepository(UsersRepository)
  private readonly userRepo: UsersRepository;

  async reviews(authUser: IAuth0User, { startDate, endDate }: ReviewsInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.find({
      where: [
        {
          user,
          startedAt: MoreThanOrEqual(startDate),
          deletedAt: IsNull(),
        },
        {
          user,
          finishedAt: LessThanOrEqual(endDate),
          deletedAt: IsNull(),
        },
        {
          user,
          startedAt: IsNull(),
          finishedAt: IsNull(),
          deletedAt: IsNull(),
        },
      ],
    });
  }

  async createReview(authUser: IAuth0User, input: CreateReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    const pendingTimeReviews = await this.reviewRepo.find({
      where: [
        {
          user,
          startedAt: IsNull(),
          finishedAt: IsNull(),
          deletedAt: IsNull(),
        },
      ],
    });

    if (3 < pendingTimeReviews.length) {
      throw new ApolloError('does not create review');
    }

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

    const review = await this.reviewRepo.findOne({
      user,
      id: input.id,
    });

    if (input.content) {
      review.content = input.content;
    }

    if (input.startedAt) {
      review.startedAt = input.startedAt;
    }

    if (input.finishedAt) {
      review.finishedAt = input.finishedAt;
    }

    return await this.reviewRepo.save(review);
  }

  async deleteReview(authUser: IAuth0User, { reviewId }: DeleteReviewInput) {
    const user = await this.userRepo.findByAuth0Id(authUser.sub);

    return await this.reviewRepo.softDelete({ user, id: reviewId });
  }
}
