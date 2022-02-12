import { Todo } from '../../../models';
export declare class CreateTodoInput implements Pick<Todo, 'content' | 'startedAt' | 'finishedAt'> {
    content: string;
    startedAt?: number;
    finishedAt?: number;
}
