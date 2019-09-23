import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WarningCenterRoutingModule } from './warning-center-routing.module';
import { WarningCenterWarningCenterComponent } from './warning-center/warning-center.component';

const COMPONENTS = [
  WarningCenterWarningCenterComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    WarningCenterRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class WarningCenterModule { }
