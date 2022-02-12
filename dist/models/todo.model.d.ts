import { TodoEntity } from './../entities/todo.entity';
export declare class TodoModel {
    id: number;
    content: string;
    startedAt?: number;
    finishedAt?: number;
    completedAt?: number;
    constructor(todo: TodoEntity);
}
