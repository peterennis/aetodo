import { Component, State, h } from '@stencil/core';
import { Aetodo } from "../../interfaces/aetodo";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  @State() todos: Aetodo[] = [];

  componentWilLoad() {
    this.todos = [
      { id: "1", title: "first todo", description: "the first thing todo" },
      { id: "2", title: "second todo", description: "the second thing todo" },
      { id: "3", title: "third todo", description: "the third thing todo" },
      { id: "4", title: "fourth todo", description: "the fourth thing todo" },
      { id: "5", title: "fifth todo", description: "the fifth thing todo" }
    ];
    console.log(this.todos)
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todos</ion-title>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon slot="icon-only" name="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

      </ion-content>
    ];
  }
}
