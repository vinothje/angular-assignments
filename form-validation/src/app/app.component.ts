import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') f: NgForm;
  title = 'app works!';
  defaultName='vinoth';

  user = {
    username: '',
    email: '',
    content: ''
  }

  ngOnInit() {

  }

  onFormSubmit() {
    console.log('form submit');
    this.user.username = this.f.value.username;
    this.user.email = this.f.value.email;
    this.user.content = this.f.value.content;
  }

  fillValues() {
    this.f.setValue({
      username: "vinoth",
      email: "vinot.j@gmail.com",
      content: "happy days"
    });
  }
}


