import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {QuoteComponent} from './quote.component';
import {CounterComponent} from './counter.component';
import {ConvertPipe} from './convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CounterComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
