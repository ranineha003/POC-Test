import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient  } from "@angular/common/http";

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MockService } from "./mock.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient ,
    HttpClientTestingModule
  ],
  providers: [MockService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
