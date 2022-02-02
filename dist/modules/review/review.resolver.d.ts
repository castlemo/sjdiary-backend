import { IAuth0User } from '../../auth';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
import { ReviewService } from './review.service';
export declare class ReviewResolver {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    reviews(authUser: IAuth0User, input: ReviewsInput): Promise<import("../../entities").ReviewEntity[]>;
    createReview(authUser: IAuth0User, input: CreateReviewInput): Promise<{
        contents: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").ReviewEntity>;
    updateReview(authUser: IAuth0User, input: UpdateReviewInput): Promise<import("../../entities").ReviewEntity>;
    deleteReview(authUser: IAuth0User, input: DeleteReviewInput): Promise<import("typeorm").UpdateResult>;
}
