import { Todo } from './models/todo.models';
export declare class TodoService {
    private todos;
    findAll(): Todo[];
    findOneById(id: number): Todo;
    create(text: string): Promise<Todo>;
}
