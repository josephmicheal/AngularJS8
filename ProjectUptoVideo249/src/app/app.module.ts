import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DateFormatPipe } from './dateformat.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortServersPipe } from './sort-server.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    FilterPipe,
    ReversePipe,
    SortServersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
