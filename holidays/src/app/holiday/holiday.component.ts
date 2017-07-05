import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  public holidayList;

  constructor(private _appService: AppService) {}

  ngOnInit() {
    // get the list of  holidays
    this.holidayList = this._appService.getHolidayList();
  }
}
