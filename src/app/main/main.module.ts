import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


//we need to import and declare the directive in the ngmodule that is going to use it
import { AdDirective } from '../test.directive';

@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule,
    
  ],
  declarations: [MainComponent, AdDirective]
})
export class MainModule { }