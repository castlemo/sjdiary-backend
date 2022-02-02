import { ReviewEntity, TodoEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class UserEntity extends CommonEntity {
    auth0Id: string;
    email: string;
    name: string;
    profileImageUrl: string;
    todos: TodoEntity[];
    reviews: ReviewEntity[];
}
