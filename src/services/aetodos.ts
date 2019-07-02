import { Aetodo } from "../interfaces/aetodo";
import { set, get } from "./storage";

class AetodoController {
  private todos: Aetodo[];

  constructor() { }

  async load(): Promise<Aetodo[]> {
    if (this.todos) {
      return this.todos;
    } else {
      this.todos = (await get("todos")) || [];
      return this.todos;
    }
  }

  async save(): Promise<void> {
    return set("todos", this.todos);
  }

  async getTodos(): Promise<Aetodo[]> {
    return await this.load();
  }

  async getTodo(id): Promise<Aetodo> {
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
    await this.save();
  }

  async addTodo(title, description): Promise<void> {
    let id = Math.max(...this.todos.map(todo => parseInt(todo.id)), 0);

    let todo = {
      id: (id + 1).toString(),
      title: title,
      description: description
    };

    this.todos.push(todo);
    await this.save();
  }
}

export const Todos = new AetodoController();
