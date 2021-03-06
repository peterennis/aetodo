import { Component, State, h } from '@stencil/core';
import { Todo } from "../../interfaces/todo";
import { Todos } from "../../services/todos";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() todos: Todo[] = [];

  componentWillLoad() {
    this.todos = [
      { id: "1", title: "first todo", description: "the first thing todo" },
      { id: "2", title: "second todo", description: "the second thing todo" },
      { id: "3", title: "third todo", description: "the third thing todo" },
      { id: "4", title: "fourth todo", description: "the fourth thing todo" },
      { id: "5", title: "fifth todo", description: "the fifth thing todo" }
    ];
    console.log(this.todos);
  }

  async presentAlert() {
    const alertCtrl = document.querySelector("ion-alert-controller");

    const alert = await alertCtrl.create({
      header: "New Todo",
      message: "Add the details of your todo below",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "title..."
        },
        {
          name: "description",
          type: "text",
          placeholder: "description..."
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("cancelled");
          }
        },
        {
          text: "Add",
          handler: data => {
            this.createTodo(data);
          }
        }
      ]
    });

    return await alert.present();
  }

  async createTodo(data) {
    await Todos.addTodo(data.title, data.description);
    this.todos = [...(await Todos.getTodos())];
  }

  async removeTodo(todo) {
    await Todos.deleteTodo(todo);
    await new Promise(resolve => setTimeout(resolve, 300));
    this.todos = [...(await Todos.getTodos())];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todos</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.presentAlert()}>
              <ion-icon slot="icon-only" name="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-list lines="none">
          {
            this.todos.map(todo => [
              <div class="todo-container" key={todo.id}>
                <ion-checkbox onClick={() => this.removeTodo(todo)} />
                <ion-item button href={`/${todo.id}`}>
                  <ion-label>{todo.title}</ion-label>
                </ion-item>
              </div>
            ])
          }
        </ion-list>
      </ion-content>
    ];
  }
}
