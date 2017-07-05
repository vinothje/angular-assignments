import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayComponent,
    HolidayDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
