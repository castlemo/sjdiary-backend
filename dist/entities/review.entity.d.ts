import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class ReviewEntity extends CommonEntity {
    contents: string;
    startedAt: number;
    finishedAt: number;
    user: UserEntity;
}
