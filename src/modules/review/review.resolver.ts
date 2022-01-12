import { IAuth0User } from './../../auth/auth.interface';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth0User } from 'src/auth';

import {
  CreateReviewInput,
  DeleteReviewInput,
  ReviewsInput,
  UpdateReviewInput,
} from './dto/input';
import { Review } from './review.model';
import { ReviewService } from './review.service';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [Review])
  async reviews(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: ReviewsInput,
  ) {
    return this.reviewService.reviews(authUser, input);
  }

  @Mutation(() => Review)
  async createReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: CreateReviewInput,
  ) {
    return this.reviewService.createReview(authUser, input);
  }

  @Mutation(() => Review)
  async updateReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: UpdateReviewInput,
  ) {
    return this.reviewService.updateReview(authUser, input);
  }

  @Mutation(() => Boolean)
  async deleteReview(
    @Auth0User() authUser: IAuth0User,
    @Args('input') input: DeleteReviewInput,
  ) {
    return this.reviewService.deleteReview(authUser, input);
  }
}
