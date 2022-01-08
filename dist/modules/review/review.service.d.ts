import { IAuthUser } from 'src/auth';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
export declare class ReviewService {
    private readonly reviewRepo;
    private readonly userRepo;
    reviews(authUser: IAuthUser, { startDate, endDate }: ReviewsInput): Promise<import("../../entities").ReviewEntity[]>;
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
    deleteReview(authUser: IAuthUser, { reviewId }: DeleteReviewInput): Promise<import("typeorm").UpdateResult>;
}
