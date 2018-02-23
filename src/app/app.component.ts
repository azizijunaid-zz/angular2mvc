import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
//import { filter } from './shared/todo-filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo;
  todos: Todo[] = [];
  editable: any = {};
  editId: number;
  title: any;
  ids: number[] = [];

  constructor(private todoDataService: TodoDataService){
    this.getTodos();
    this.newTodo = {title:'', complete: false}
  }

  completedTodos(id){
      if(this.ids.indexOf(id) === -1){
          this.ids.push(id);
      }
  }

  clearInput(){
    this.newTodo = {title:'', complete: false}
  }


  addTodo(){
    if(this.editable.flag){
        this.todoDataService.updateTodo(this.newTodo, this.editId);
        this.title = this.newTodo.title
        var todo = this.todos[this.editable.index];
        todo.title = this.title
        this.todos.splice(this.editable.index, 1, todo);
        this.clearInput()
    }else{
      this.todoDataService.addTodo(this.newTodo).then( todos => {
          this.todos.push(todos);
      });
      this.clearInput();
    }
  }

  removeTodo(todo, index){
      console.log(index)
      this.todoDataService.deleteTodoById(todo);
      this.todos.splice(index, 1);
  }

  toggleTodoComplete(todo, params){
      this.completedTodos(todo._id);
      //this.todoDataService.toggleTodoComplete(todo);
  }

  active(bool){
      return !bool;
  }

  all(){
    return this.todoDataService.getAllTodos();
  }
  


  async clearTodoComplete(){
    try{
      await this.todoDataService.clearTodoCOmplete(this.ids);
      this.getTodos();    
    }catch(ex){
      console.log(ex);
    }
    
  }

  editTodo(todo, flag, index){
    console.log('flag', this.editable);
    this.editable['flag'] = flag;
    this.editable['index'] = index;
    this.editId = todo._id;
    this.newTodo.title = todo.title

    console.log(this.editable)
    
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
       console.log('todos', todos)
          this.todos = todos;
      })
      
  }
  
}
