import { CommonEntity } from '../entities';
export declare class Todos extends CommonEntity {
    content: string;
    startedAt?: number;
    finishedAt?: number;
    completedAt?: number;
}
