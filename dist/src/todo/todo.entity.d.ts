import { TodoPeriod } from '../todo-period/todo-period.entity';
import { User } from '../user/user.entity';
import { BaseEntity } from 'typeorm';
import { Category } from 'src/category/category.entity';
export declare class Todo extends BaseEntity {
    id: number;
    userId: number;
    contents: string;
    allIndex: number;
    categoryIndex: number;
    categoryId: number;
    checkedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    User: User;
    TodoPeriod: TodoPeriod;
    Category: Category;
}
