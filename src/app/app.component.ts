import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo'


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
    console.log(this.todoDataService.filterTodo)
    return this.todoDataService.filterTodo = this.todos.filter(todo => todo.complete == false) 
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
