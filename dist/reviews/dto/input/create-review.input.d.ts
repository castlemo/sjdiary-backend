import { ReviewModel } from '../../../models';
export declare class CreateReviewInput implements Pick<ReviewModel, 'content' | 'startedAt' | 'finishedAt'> {
    content: string;
    startedAt?: number;
    finishedAt?: number;
}
