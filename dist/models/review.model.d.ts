import { ReviewEntity } from './../entities';
export declare class ReviewModel {
    id: number;
    content: string;
    startedAt?: number;
    finishedAt?: number;
    constructor(review: ReviewEntity);
}
