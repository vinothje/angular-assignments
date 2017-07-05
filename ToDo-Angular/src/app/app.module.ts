import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoEditComponent } from './to-do/to-do-edit/to-do-edit.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HomeComponent } from './home/home.component';
import {ToDoService} from "app/to-do/to-do.service";

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoEditComponent,
    ShoppingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
