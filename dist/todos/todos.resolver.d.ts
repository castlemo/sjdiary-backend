import { IAuth0User } from '../auth';
import { TodoModel } from '../models';
import { CreateTodoInput, DeleteTodoInput, TodosInput, UpdateTodoInput } from './dto/input';
import { TodosService } from './todos.service';
export declare class TodosResolver {
    private readonly todoService;
    constructor(todoService: TodosService);
    todos(authUser: IAuth0User, input: TodosInput): Promise<TodoModel[]>;
    createTodo(authUser: IAuth0User, input: CreateTodoInput): Promise<TodoModel>;
    updateTodo(authUser: IAuth0User, input: UpdateTodoInput): Promise<TodoModel>;
    deleteTodo(authUser: IAuth0User, input: DeleteTodoInput): Promise<boolean>;
}
