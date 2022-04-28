import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { EmpsListComponent } from './emps-list/emps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SortOptionsComponent,
    EmpsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
