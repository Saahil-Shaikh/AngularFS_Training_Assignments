import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
