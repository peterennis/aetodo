import { Component, State, h } from '@stencil/core';
import { Todo } from "../../interfaces/todo";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() todos: Todo[] = [];

  componentWilLoad() {
    this.todos = [
      { id: "1", title: "first todo", description: "the first thing todo" },
      { id: "2", title: "second todo", description: "the second thing todo" },
      { id: "3", title: "third todo", description: "the third thing todo" },
      { id: "4", title: "fourth todo", description: "the fourth thing todo" },
      { id: "5", title: "fifth todo", description: "the fifth thing todo" }
    ];
    console.log(this.todos);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/detail/ionic" expand="block">Detail page</ion-button>
      </ion-content>
    ];
  }
}
