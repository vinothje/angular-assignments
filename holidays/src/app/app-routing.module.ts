import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { NgModule } from '@angular/core';
import {HolidayComponent} from './holiday/holiday.component';
import {HolidayDetailComponent} from './holiday-detail/holiday-detail.component';

const appRoutes: Routes = [
  { path: '', component: HolidayComponent, pathMatch: 'full'},
  { path: 'holiday/:id', component: HolidayDetailComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
