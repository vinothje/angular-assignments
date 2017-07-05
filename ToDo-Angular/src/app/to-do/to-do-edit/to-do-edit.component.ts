import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit {

  public todo;
  private id: number;
  private todoList;
  constructor(private route: ActivatedRoute, private todoService: ToDoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getToDoList();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.todoList.map((todoObj) => {
          if(todoObj.id === this.id) {
            this.todo = todoObj;
          }
        });
      });

  }

}
