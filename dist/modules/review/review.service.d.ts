import { IAuth0User } from 'src/auth';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
export declare class ReviewService {
    private readonly reviewRepo;
    private readonly userRepo;
    reviews(authUser: IAuth0User, { startDate, endDate }: ReviewsInput): Promise<import("../../entities").ReviewEntity[]>;
    createReview(authUser: IAuth0User, input: CreateReviewInput): Promise<{
        contents: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").ReviewEntity>;
    updateReview(authUser: IAuth0User, input: UpdateReviewInput): Promise<{
        contents?: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").ReviewEntity>;
    deleteReview(authUser: IAuth0User, { reviewId }: DeleteReviewInput): Promise<import("typeorm").UpdateResult>;
}
