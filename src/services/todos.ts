import { Todo } from "../interfaces/todo";

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

  async save(): Promise<void> {

  }

  async getTodos(): Promise<Todo[]> {
    return await this.load();
  }

  async getTodo(id): Promise<Todo> {
    let todos = await this.load();
    return todos.find(todo => {
      return todo.id === id;
    });
  }

  async deleteTodo(todoToDelete): Promise<void> {
    let index = this.todos.findIndex(todo => {
      return todoToDelete.id == todo.id;
    });
    this.todos.splice(index, 1);
  }

  async addTodo(title, description): Promise<void> {
    let id = Math.max(...this.todos.map(todo => parseInt(todo.id)), 0);

    let todo = {
      id: (id + 1).toString(),
      title: title,
      description: description
    }

    this.todos.push(todo);
  }
}

export const Todos = new TodoController();
