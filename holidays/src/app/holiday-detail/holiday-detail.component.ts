import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {
  private id: number;
  public holiday;
  constructor(private router: Router, private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get the holiday detail for the given holiday id.
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.appService.holidayList.length > 0) {
          this.holiday = this.appService.getHolidayDetail(this.id);
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
