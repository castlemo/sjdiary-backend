import { IAuthUser } from './../../auth/auth.interface';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
import { ReviewService } from './review.service';
export declare class ReviewResolver {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    reviews(authUser: IAuthUser, input: ReviewsInput): Promise<import("../../entities").ReviewEntity[]>;
    createReview(authUser: IAuthUser, input: CreateReviewInput): Promise<{
        contents: string;
        startedAt: number;
        finishedAt: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").ReviewEntity>;
    updateReview(authUser: IAuthUser, input: UpdateReviewInput): Promise<{
        contents?: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").ReviewEntity>;
    deleteReview(authUser: IAuthUser, input: DeleteReviewInput): Promise<import("typeorm").UpdateResult>;
}
