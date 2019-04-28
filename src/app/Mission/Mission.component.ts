import { Component,Input,OnInit} from '@angular/core';
import {Mission} from '../Models/Mission.model';
import {ListService} from '../services/List.service';

@Component({
  selector: 'Mission',
  templateUrl: './Mission.component.html',
  styleUrls: [ './Mission.component.css' ]
})
export class MissionComponent implements OnInit  {
 @Input() mission: Mission;

 constructor(private listService:ListService){
 }

 ngOnInit(){
   
 }

 updateMission(id:String,completed:boolean){
  this.listService.changeStatus(id,completed).subscribe((data:Mission) =>{
    this.mission=data;
  },(err:Error) =>{
    console.log(err)
  })
 }
}
