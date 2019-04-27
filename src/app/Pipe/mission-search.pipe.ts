import { Pipe, PipeTransform } from '@angular/core';
import { Mission } from '../Models/Mission.model';

@Pipe({
  name: 'missionSearch'
})
export class MissionSearchPipe implements PipeTransform {
  arr = [];
  transform(values: any[], args: any): any[] {
    console.log(values,'values');
    if (!values || !values.length) return [];
    if (!args) return values;

    return values.filter(item => {
      //return true a false 
      console.log(item);
      return item.name.toLowerCase().startsWith(args.toLowerCase().trim()) 


    })

  }
}