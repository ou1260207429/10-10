import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigScreenRoutingModule } from './big-screen-routing.module';
import { BigScreenComponent } from './big/big-screen.component';

@NgModule({
  declarations: [BigScreenComponent],
  imports: [
    CommonModule,
    BigScreenRoutingModule
  ]
})
export class BigScreenModule { }
