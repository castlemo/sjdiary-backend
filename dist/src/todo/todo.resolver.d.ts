import { Auth0UserInterface } from '../auth/auth.guard';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodoInput, UpdateTodoInput, GetTodosInput } from './input';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodo(currentUser: Auth0UserInterface, todoId: number): Promise<Todo>;
    getTodos(currentUser: Auth0UserInterface, input: GetTodosInput): Promise<Todo[]>;
    createTodo(currentUser: Auth0UserInterface, input: CreateTodoInput): Promise<Todo>;
    updateTodo(currentUser: Auth0UserInterface, input: UpdateTodoInput): Promise<Todo>;
    deleteTodo(currentUser: Auth0UserInterface, todoId: number): Promise<boolean>;
}
