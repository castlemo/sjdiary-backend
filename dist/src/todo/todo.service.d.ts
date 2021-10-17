import { Connection } from 'typeorm';
import { Auth0UserInterface } from '../auth/auth.guard';
import { Todo } from './todo.entity';
import { CreateTodoInput, GetTodosInput, UpdateTodoInput } from './input';
export declare class TodoService {
    private readonly connection;
    private readonly userRepo;
    private readonly categoryRepo;
    private readonly todoRepo;
    private readonly todoPeriodRepo;
    constructor(connection: Connection);
    createTodo(currentUser: Auth0UserInterface, createTodoInput: CreateTodoInput): Promise<Todo>;
    updateTodo(currentUser: Auth0UserInterface, todoId: number, updateTodoInput: UpdateTodoInput): Promise<Todo>;
    deleteTodo(currentUser: Auth0UserInterface, todoId: number): Promise<boolean>;
    getTodo(currentUser: Auth0UserInterface, todoId: number): Promise<Todo>;
    getTodos(currentUser: Auth0UserInterface, { type, categoryId }: GetTodosInput): Promise<Todo[]>;
}
