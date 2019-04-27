import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './List/List.component';


const appRoutes :Routes = [ 
  {path:'dotoList',component:ListComponent},
    {path: '' , redirectTo:'dotoList',pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting {}





