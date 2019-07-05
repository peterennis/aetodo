import { Todo } from "../services/todo";

class TodoController {

  private todos: Todo[];

  constructor() { }

  load(): Promise<Todo[]> {

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
