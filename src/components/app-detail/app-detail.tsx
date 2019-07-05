import { Component, Prop, State, h } from '@stencil/core';
import { Todos } from "../../services/todos";
import { Todo } from "../../interfaces/todo";
//import { sayHello } from '../../helpers/utils';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css'
})
export class AppDetail {

  @Prop() id: string;

  @State() todo: Todo = {
    id: null,
    title: "",
    description: ""
  };

  async componentWillLoad() {
    this.todo = await Todos.getTodo(this.id);
  }



  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Detail</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h2>{this.todo.title}</h2>
        <p>{this.todo.description}</p>
      </ion-content>
    ];
  }
}
