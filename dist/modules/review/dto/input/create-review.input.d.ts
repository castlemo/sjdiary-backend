import { Review } from '../../review.model';
export declare class CreateReviewInput implements Pick<Review, 'contents' | 'startedAt' | 'finishedAt'> {
    contents: string;
    startedAt?: number;
    finishedAt?: number;
}
