import { Todo } from '../../todo.model';
export declare class CreateTodoInput implements Pick<Todo, 'contents' | 'startedAt' | 'finishedAt'> {
    contents: string;
    startedAt?: number;
    finishedAt?: number;
}
