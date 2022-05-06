import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMyShadowDirective } from './app-my-shadow.directive';
import { AdminPanelDirective } from './admin-panel.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppMyShadowDirective,
    AdminPanelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
