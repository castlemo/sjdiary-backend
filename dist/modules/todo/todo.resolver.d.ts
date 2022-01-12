import { IAuth0User } from './../../auth/auth.interface';
import { TodoService } from './todo.service';
import { CreateTodoInput, DeleteTodoInput, TodosInput, UpdateTodoInput } from './dto/input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    todos(authUser: IAuth0User, input: TodosInput): Promise<import("../../entities").TodoEntity[]>;
    createTodo(authUser: IAuth0User, input: CreateTodoInput): Promise<{
        contents: string;
        startedAt: number;
        finishedAt: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    updateTodo(authUser: IAuth0User, input: UpdateTodoInput): Promise<{
        contents?: string;
        startedAt?: number;
        finishedAt?: number;
        completedAt?: number;
        user: import("../../entities").UserEntity;
    } & import("../../entities").TodoEntity>;
    deleteTodo(authUser: IAuth0User, input: DeleteTodoInput): Promise<boolean>;
}
