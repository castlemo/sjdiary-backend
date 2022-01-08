import { IAuthUser } from './../../auth/auth.interface';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth';

import {
  CreateReviewInput,
  DeleteReviewInput,
  ReviewsInput,
  UpdateReviewInput,
} from './dto/input';
import { Review } from './dto/output';
import { ReviewService } from './review.service';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [Review])
  async reviews(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: ReviewsInput,
  ) {
    return this.reviewService.reviews(authUser, input);
  }

  @Mutation(() => Review)
  async createReview(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: CreateReviewInput,
  ) {
    return this.reviewService.createReview(authUser, input);
  }

  @Mutation(() => Review)
  async updateReview(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: UpdateReviewInput,
  ) {
    return this.reviewService.updateReview(authUser, input);
  }

  @Mutation(() => Boolean)
  async deleteReview(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: DeleteReviewInput,
  ) {
    return this.reviewService.deleteReview(authUser, input);
  }
}
