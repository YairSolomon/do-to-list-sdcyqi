import { Component,Input,OnInit} from '@angular/core';
import {Mission} from '../Models/Mission.model';

@Component({
  selector: 'Mission',
  templateUrl: './Mission.component.html',
  styleUrls: [ './Mission.component.css' ]
})
export class MissionComponent implements OnInit  {
 @Input() mission: Mission;

 ngOnInit(){
 }
}
