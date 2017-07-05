import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Input() logData;
  @Input() logIndex;
  constructor() { }

  ngOnInit() {
  }

}
