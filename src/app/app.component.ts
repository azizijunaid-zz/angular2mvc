import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
//import { filter } from './shared/todo-filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  constructor(private todoDataService: TodoDataService){}

  newTodo: Todo = new Todo();
  addTodo(){
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
  }

  removeTodo(todo){
      this.todoDataService.deleteTodoById(todo.id);
  }

  toggleTodoComplete(todo){
      this.todoDataService.toggleTodoComplete(todo);
  //     console.log(this.todoDataService.showCompletedLength());
  }

  active(){
    // this.todoDataService.getactive()    
    // console.log('this', this)
  }

  all(){
    return this.todoDataService.getAllTodos();
  }
  


  clearTodoComplete(){
    this.todoDataService.clearTodoCOmplete();
  }

  get todos() {
      return this.todoDataService.getAllTodos();
  }
  
}
