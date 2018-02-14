import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TodoDataService} from './todo-data.service';
import { HttpModule } from '@angular/http';
import { TodoFilterPipe } from './shared/todo-filter.pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
