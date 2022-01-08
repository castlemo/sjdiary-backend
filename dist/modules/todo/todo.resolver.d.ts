import { IAuthUser } from './../../auth/auth.interface';
import { TodoService } from './todo.service';
import { CreateTodoInput, DeleteTodoInput, TodosInput, UpdateTodoInput } from './dto/input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    todos(authUser: IAuthUser, input: TodosInput): Promise<import("../../entities").TodoEntity[]>;
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
    deleteTodo(authUser: IAuthUser, input: DeleteTodoInput): Promise<boolean>;
}
