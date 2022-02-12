import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class TodoEntity extends CommonEntity {
    content: string;
    startedAt?: string;
    finishedAt?: string;
    completedAt?: string;
    user: UserEntity;
}
