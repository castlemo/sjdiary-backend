import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class TodoEntity extends CommonEntity {
    content: string;
    startedAt?: Date;
    finishedAt?: Date;
    completedAt?: Date;
    user: UserEntity;
}
