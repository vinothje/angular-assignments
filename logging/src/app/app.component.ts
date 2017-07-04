import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  private logCnt;
  public allLogs = [];
  constructor() {
    this.logCnt = 0;
  }

  addLog() {
    this.allLogs.push({
      logData : new Date(),
      logCnt: this.logCnt++});
  }
}
