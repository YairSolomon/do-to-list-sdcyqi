import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import {ListComponent} from './List/List.component';
import {AppRouting} from './app-routing.module';
import {ListComponent} from './List/List.component';
import {MissionComponent} from './Mission/Mission.component';
import {PageNotFound} from './PageNotFound/PageNotFound.component';
import {ListService } from './services/List.service';
import { HttpClientModule } from '@angular/common/http';
import {MissionSearchPipe} from './Pipe/mission-search.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRouting,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,ListComponent,MissionComponent,MissionSearchPipe,PageNotFound],
  providers:[ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
