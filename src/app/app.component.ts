import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { filter } from './shared/todo-filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo;
  todos: Todo[] = []

  constructor(private todoDataService: TodoDataService){
    this.getTodos();
    this.newTodo = {title:'', complete: false}
  }

  addTodo(){
      this.todoDataService.addTodo(this.newTodo).then( todos => {
          this.todos.push(todos);
      });
      this.newTodo = {title:'', complete: false}
  }

  removeTodo(todo){
      this.todoDataService.deleteTodoById(todo);
      this.todos.splice(todo, 1);
  }

  toggleTodoComplete(todo, params){
      this.todoDataService.toggleTodoComplete(todo);
  }

  active(bool){
    // this.todoDataService.getactive()    
    // console.log('this', this)
    return !bool;
  }

  all(){
    return this.todoDataService.getAllTodos();
  }
  


  clearTodoComplete(){
    this.todoDataService.clearTodoCOmplete();
  }


  // .subscribe(
  //   res => {
  //     this.todos =;
  //   },
  //   err => {
  //       console.log('fetch data error', err)
  //   });
  getTodos(){
     this.todoDataService.getAllTodos().then( todos => {
          this.todos = todos;
      })
      
  }
  
}
