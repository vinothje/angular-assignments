
import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import axios from 'axios';

@Injectable()
export class AppService implements  OnInit {
  public holidayList: any[] = [];
  private result;
  constructor() {}

  ngOnInit() {

  }

  // get the holiday list from the holidays public api
  // I am adding id manually to each holiday to keep it unique so that it is easy for retrieval.
  getHolidayList() {
    if(this.holidayList.length > 1) {
      return this.holidayList;
    }
    let count = 1;

    // live key : d0921889-444b-42d2-9dfe-dde7a52a514b
    // dummy key : 53283575-e936-47a2-b78d-f185e9384a90
    // axios.get('https://holidayapi.com/v1/holidays?key=53283575-e936-47a2-b78d-f185e9384a90&country=US&year=2015')
    axios.get('https://holidayapi.com/v1/holidays?key=d0921889-444b-42d2-9dfe-dde7a52a514b&country=US&year=2015')
      .then((data) => {
        this.result = data.data;
        for (const list in this.result.holidays) {
          for ( const item in this.result.holidays[list]) {
            if (this.result.holidays[list][item].public) {
              this.result.holidays[list][item].id = count++;
              this.holidayList.push(this.result.holidays[list][item]);
            }
          }
        }
      });
    return this.holidayList;
  }

  // get the holiday details from the given holiday id generated locally
  getHolidayDetail(id: number) {
    for(const item in this.holidayList) {
      if (this.holidayList[item].id === id) {
        return this.holidayList[item];
      }
    }
  }
}
