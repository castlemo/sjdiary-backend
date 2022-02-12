import { IAuth0User } from '../auth';
import { CreateTodoInput, DeleteTodoInput, TodosInput, UpdateTodoInput } from './dto/input';
import { TodosService } from './todos.service';
export declare class TodosResolver {
    private readonly todoService;
    constructor(todoService: TodosService);
    todos(authUser: IAuth0User, input: TodosInput): Promise<import("../entities").TodoEntity[]>;
    createTodo(authUser: IAuth0User, input: CreateTodoInput): Promise<{
        content: string;
        startedAt?: number;
        finishedAt?: number;
        user: import("../entities").UserEntity;
    } & import("../entities").TodoEntity>;
    updateTodo(authUser: IAuth0User, input: UpdateTodoInput): Promise<import("../entities").TodoEntity>;
    deleteTodo(authUser: IAuth0User, input: DeleteTodoInput): Promise<boolean>;
}
