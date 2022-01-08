import { IAuthUser } from 'src/auth';
import { TodosInput, CreateTodoInput, UpdateTodoInput, DeleteTodoInput } from './dto/input';
export declare class TodoService {
    private readonly todoRepo;
    private readonly userRepo;
    todos(authUser: IAuthUser, { startDate, endDate }: TodosInput): Promise<import("../../entities").TodoEntity[]>;
    createTodo(authUser: IAuthUser, input: CreateTodoInput): Promise<{
        contents: string;
        startedAt: number;
        finishedAt: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    updateTodo(authUser: IAuthUser, input: UpdateTodoInput): Promise<{
        completedAt: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    deleteTodo(authUser: IAuthUser, { todoId }: DeleteTodoInput): Promise<boolean>;
}
