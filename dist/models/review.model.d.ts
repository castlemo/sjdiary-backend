import { CommonEntity, ReviewEntity } from '../entities';
export declare class Review extends CommonEntity implements Omit<ReviewEntity, 'user' | 'deletedAt'> {
    content: string;
    startedAt?: number;
    finishedAt?: number;
}
