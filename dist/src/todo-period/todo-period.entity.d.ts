import { BaseEntity } from 'typeorm';
import { Todo } from '../todo/todo.entity';
export declare class TodoPeriod extends BaseEntity {
    id: number;
    todoId: number;
    isTime: boolean;
    startedAt: Date;
    endedAt: Date;
    Todo: Todo;
}
