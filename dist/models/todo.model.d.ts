import { CommonEntity } from '../entities';
export declare class Todo extends CommonEntity {
    content: string;
    startedAt?: number;
    finishedAt?: number;
    completedAt?: number;
}
