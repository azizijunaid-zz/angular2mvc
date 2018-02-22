import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TodoDataService} from './todo-data.service';
import { HttpModule, JsonpModule } from '@angular/http';
//import { TodoFilterPipe } from './shared/todo-filter.pipe';
import { TodoFilterPipe } from './todo-filter.pipe';

import { AppComponent } from './app.component';
import { Todo } from './todo';


@NgModule({
  declarations: [
    AppComponent,
    TodoFilterPipe, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
