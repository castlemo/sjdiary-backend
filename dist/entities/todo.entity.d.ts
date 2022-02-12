import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class TodoEntity extends CommonEntity {
    content: string;
    startedAt?: number;
    finishedAt?: number;
    completedAt?: number;
    user: UserEntity;
}
