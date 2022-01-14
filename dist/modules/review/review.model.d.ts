import { CommonEntity, ReviewEntity } from 'src/entities';
export declare class Review extends CommonEntity implements Omit<ReviewEntity, 'user' | 'deletedAt'> {
    contents: string;
    startedAt: number;
    finishedAt: number;
}
