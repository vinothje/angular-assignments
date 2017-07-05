import { Component, OnInit } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todoList: any[];
  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getToDoList().map((todo) => {
      return todo;
    });
  }

}
