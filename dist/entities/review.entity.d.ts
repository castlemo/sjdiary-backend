import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class ReviewEntity extends CommonEntity {
    content: string;
    startedAt?: Date;
    finishedAt?: Date;
    user: UserEntity;
}
