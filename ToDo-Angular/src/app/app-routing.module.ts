import { RouterModule, Routes } from '@angular/router';
import {ToDoComponent} from "app/to-do/to-do.component";
import {ShoppingComponent} from "app/shopping/shopping.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "app/home/home.component";
import {ToDoEditComponent} from "app/to-do/to-do-edit/to-do-edit.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'to-do', component: ToDoComponent,
    children: [
      { path: ':id/edit', component: ToDoEditComponent }
    ]},
  { path: 'shopping', component: ShoppingComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


