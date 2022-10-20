import { Todo } from './models/todo.models';
import { TodoService } from './todo.service';
export declare class TodoResolver {
    private todoService;
    constructor(todoService: TodoService);
    getTodos(): Todo[];
    createTodo(text: string): Promise<Todo>;
}
