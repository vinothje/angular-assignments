import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class ToDoService implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  getToDoList() {
    return [
      { id: 1, name: 'test1'},
      { id: 2, name: 'test2'},
      { id: 3, name: 'test3'}
    ]
  }
}
