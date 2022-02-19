import { IAuth0User } from '../auth';
import { ReviewModel } from '../models';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
import { ReviewsService } from './reviews.service';
export declare class ReviewsResolver {
    private readonly reviewService;
    constructor(reviewService: ReviewsService);
    reviews(authUser: IAuth0User, input: ReviewsInput): Promise<ReviewModel[]>;
    createReview(authUser: IAuth0User, input: CreateReviewInput): Promise<ReviewModel>;
    updateReview(authUser: IAuth0User, input: UpdateReviewInput): Promise<ReviewModel>;
    deleteReview(authUser: IAuth0User, input: DeleteReviewInput): Promise<boolean>;
}
