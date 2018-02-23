import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoDataService {

  //lastId: number = 0;
  todos: Todo[] = [];
  constructor(private http: Http) {};
  todosCompletLength = 0;
  baseUrl = 'http://localhost:3000'

  addTodo(todo: Todo): Promise<Todo>{
        var url  = this.baseUrl + '/createtodo/';
        var payload = {
            title: todo.title,
            complete: todo.complete
        }         
        return this.http.post(url, payload)
        .map(response => response.json())
        .toPromise()
        .catch(err => console.log(err));      
  }

  deleteTodoById(id: number) {
      var url  = this.baseUrl + '/removetodobyId/' + id;         
      return this.http.delete(url)
      .toPromise()
      .catch(err => console.log(err));                  
  }


//   updateTodoById(id: number, values: Object = {}): Todo{
//     let todo = this.getTodoById(id);
//     if(!todo){
//         return null;
//     }

//     Object.assign(todo, values);
//     return todo;

//   }

  toggleTodoComplete(todo){
      //console.log(todo.complete)
    var url  = this.baseUrl + '/toggleCompleted/' + todo._id;   
        var payload = {complete: !todo.complete}  
      return this.http.put(url, payload)
      .toPromise()
      .catch(err => console.log(err));  
  }

  clearTodoCOmplete(ids){
    //clear whose complete is true;
    // return this.todos =  this.todos
    // .filter(todo=> !todo.complete )
    console.log('janay se pehle', ids);
    var url  = this.baseUrl + '/clearCompletedTodos';   
      return this.http.delete(url, new RequestOptions({
        body: ids
      }))
      .toPromise()
      .catch(err => console.log(err));  
  }

 
//   getTodoById(id: number): Todo {
//       return this.todos
//         .filter(todo => todo.id === id)
//         .pop();
//   }

  getAllTodos(): Promise<Todo[]>{
        let url = 'http://localhost:3000/';
        return this.http.get(url)
                   .toPromise()
                   .then((response =>{
                       console.log('res', response.json())
                       return this.todos =  response.json()
                   }))
                   .catch(err => console.log(err));
       
  } 

  getactive(){
  //  this.filterTodo = this.todos
  //   .filter(todo => todo.complete == false)
  }

  // showCompletedLength(): TodoDataService{
  //   this.todosCompletLength = this.todos
  //   .filter(todo=> !todo.complete).length
  //   return this
  // }

  updateTodo(todo: Todo, id: number) {
    //this.http.patch(this.baseUrl + 'update')
    //console.log('todo', todo);
    var url  = this.baseUrl + '/updateTodo/' + id; 
    console.log('url', url);
      return this.http.put(url, todo)
      .toPromise()
      .catch(err => console.log(err));  
  }

}
