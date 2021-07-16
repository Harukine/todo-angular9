import { Component } from '@angular/core';

import { TodoList } from './todo/todoList';
import { TodoItem } from './todo/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);

  showComplete = false;

  addItem(newItem) {
    if (newItem !== '') {
      this.list.addItem(newItem);
    }
  }
}
