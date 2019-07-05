import { Todo } from "../services/todo";

class TodoController {

  private todos: Todo[];

  constructor() { }

  async load(): Promise<Todo[]> {
    if (this.todos) {
      return this.todos
    } else {
      this.todos = [{ id: '1', title: 'test', description: 'test' }]
      return this.todos
    }
  }

  save(): Promise<void> {

  }

  getTodos(): Promise<Todo[]> {

  }

  getTodo(id): Promise<Todo> {

  }

  deleteTodo(todoToDelete): Promise<void> {

  }

  addTodo(title, description): Promise<void> {

  }
}

export const Todos = new TodoController();
