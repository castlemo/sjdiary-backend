import { IAuth0User } from 'src/auth';
import { TodosInput, CreateTodoInput, UpdateTodoInput, DeleteTodoInput } from './dto/input';
export declare class TodoService {
    private readonly todoRepo;
    private readonly userRepo;
    todos(authUser: IAuth0User, { startDate, endDate }: TodosInput): Promise<import("../../entities").TodoEntity[]>;
    createTodo(authUser: IAuth0User, input: CreateTodoInput): Promise<{
        contents: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    updateTodo(authUser: IAuth0User, input: UpdateTodoInput): Promise<{
        contents?: string;
        startedAt?: number;
        finishedAt?: number;
        completedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    deleteTodo(authUser: IAuth0User, { todoId }: DeleteTodoInput): Promise<boolean>;
}
