import { TodoEntity, CommonEntity } from 'src/entities';
export declare class Todo extends CommonEntity implements Omit<TodoEntity, 'user'> {
    contents: string;
    startedAt: number;
    finishedAt: number;
    completedAt: number;
}
