import { Review } from '../../../models';
export declare class CreateReviewInput implements Pick<Review, 'content' | 'startedAt' | 'finishedAt'> {
    content: string;
    startedAt?: number;
    finishedAt?: number;
}
