import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Auth0User, GqlAuthGuard, IAuth0User } from '../auth';
import { Review } from '../models';

import {
  CreateReviewInput,
  DeleteReviewInput,
  ReviewsInput,
  UpdateReviewInput,
} from './dto/input';
import { ReviewsService } from './reviews.service';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(private readonly reviewService: ReviewsService) {}

  @Query(() => [Review])
  @UseGuards(GqlAuthGuard)
  async reviews(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: ReviewsInput,
  ) {
    return await this.reviewService.reviews(authUser, input);
  }

  @Mutation(() => Review)
  @UseGuards(GqlAuthGuard)
  async createReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: CreateReviewInput,
  ) {
    return await this.reviewService.createReview(authUser, input);
  }

  @Mutation(() => Review)
  @UseGuards(GqlAuthGuard)
  async updateReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: UpdateReviewInput,
  ) {
    return await this.reviewService.updateReview(authUser, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: DeleteReviewInput,
  ) {
    return await this.reviewService.deleteReview(authUser, input);
  }
}
