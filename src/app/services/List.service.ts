import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Mission} from '../Models/Mission.model';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  todosApiUrl = 'http://localhost:3000/api/todos';

  constructor(private http:HttpClient ){

  }

  getToDos(){

    return this.http.get<Mission[]>(this.todosApiUrl);
  }

  addTodo(value:String){
    return this.http.post(this.todosApiUrl,{name:value})
  }

  removeTodo(id:String){
    return this.http.delete(this.todosApiUrl+"/" +id)
    }

    changeStatus(id:String,completed:boolean){
   
      return this.http.put<Mission>(this.todosApiUrl+"/"+id,{completed:!completed});
    }
  
}
