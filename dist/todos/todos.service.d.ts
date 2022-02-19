import { IAuth0User } from '../auth';
import { TodoModel } from './../models';
import { CreateTodoInput, DeleteTodoInput, TodosInput, UpdateTodoInput } from './dto/input';
export declare class TodosService {
    private readonly todoRepo;
    private readonly userRepo;
    todos(authUser: IAuth0User, { startDate, endDate }: TodosInput): Promise<TodoModel[]>;
    createTodo(authUser: IAuth0User, { content, startedAt, finishedAt }: CreateTodoInput): Promise<TodoModel>;
    updateTodo(authUser: IAuth0User, input: UpdateTodoInput): Promise<TodoModel>;
    deleteTodo(authUser: IAuth0User, { id }: DeleteTodoInput): Promise<boolean>;
}
