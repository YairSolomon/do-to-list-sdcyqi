import { Component,OnInit} from '@angular/core';
import {ListService} from '../services/List.service';
import {Mission} from '../Models/Mission.model';

@Component({
  selector: 'List',
  templateUrl: './List.component.html',
  styleUrls: [ './List.component.css' ]
})
export class ListComponent implements OnInit  {
missions:Mission[];
value:String;

constructor(private listService:ListService){

}
  
  ngOnInit(){

    this.listService.getToDos().subscribe(data =>{
      this.missions=data;
    },(err)=>{
      console.log(err);
    })

  }

  addTodo(){
        this.listService.addTodo(this.value).subscribe((data:Mission) => {
          this.missions.push(data);
          this.value='';
        },err =>{
          console.log(err)
        })
  }

  removeTodo(id,index){
    this.listService.removeTodo(id).subscribe(data=>{
     this.missions.splice(index,1);
    });
  }
 
}
