import { TodoModel } from '../../../models';
export declare class CreateTodoInput implements Pick<TodoModel, 'content' | 'startedAt' | 'finishedAt'> {
    content: string;
    startedAt?: number;
    finishedAt?: number;
}
