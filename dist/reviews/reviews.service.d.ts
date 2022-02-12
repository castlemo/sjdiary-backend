import { IAuth0User } from '../auth';
import { ReviewModel } from './../models';
import { CreateReviewInput, DeleteReviewInput, ReviewsInput, UpdateReviewInput } from './dto/input';
export declare class ReviewsService {
    private readonly reviewRepo;
    private readonly userRepo;
    reviews(authUser: IAuth0User, { startDate, endDate }: ReviewsInput): Promise<ReviewModel[]>;
    createReview(authUser: IAuth0User, { content, startedAt, finishedAt }: CreateReviewInput): Promise<ReviewModel>;
    updateReview(authUser: IAuth0User, input: UpdateReviewInput): Promise<ReviewModel>;
    deleteReview(authUser: IAuth0User, { reviewId }: DeleteReviewInput): Promise<import("typeorm").UpdateResult>;
}
