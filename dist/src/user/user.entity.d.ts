import { BaseEntity } from 'typeorm';
import { Todo } from '../todo/todo.entity';
import { UserSetting } from '../user-setting/user-setting.entity';
import { Category } from '../category/category.entity';
export declare class User extends BaseEntity {
    id: number;
    auth0Id: string;
    email: string;
    name: string;
    nickname: string;
    motto: string;
    profileImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    UserSetting: UserSetting;
    Todos: Todo[];
    Categories: Category[];
}
