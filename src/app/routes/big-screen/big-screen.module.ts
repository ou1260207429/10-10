import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { BigScreenRoutingModule } from './big-screen-routing.module';
import { BigScreenScreenContentComponent } from './screen-content/screen-content.component';
import { NgxEchartsModule } from 'ngx-echarts';
const COMPONENTS = [
  BigScreenScreenContentComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NgxEchartsModule,
    BigScreenRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class BigScreenModule { }
