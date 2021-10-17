import { BaseEntity } from 'typeorm';
import { Todo } from '../todo/todo.entity';
import { User } from 'src/user/user.entity';
export declare class Category extends BaseEntity {
    id: number;
    userId: number;
    name: string;
    color: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    User: User;
    Todos: Todo[];
}
