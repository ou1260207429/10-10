import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ApplyFormRoutingModule } from './apply-form-routing.module';
import { PrintPagesAcceptanceManagementPrintComponent } from './acceptance-management-print/acceptance-management-print.component';
import { PrintPagesCompletedAcceptancePrintComponent } from './completed-acceptance-print/completed-acceptance-print.component';
import { PrintPagesFiewDesignDeclarePrintComponent } from './fiew-design-declare-print/fiew-design-declare-print.component';
import { InvestigateFormComponent } from './investigate-form/investigate-form';
import { LayoutDefaultComponent } from 'src/app/layout/default/default.component';
import { LayoutFullScreenComponent } from 'src/app/layout/fullscreen/fullscreen.component';
import { LayoutModule } from 'src/app/layout/layout.module';

const COMPONENTS = [
  PrintPagesAcceptanceManagementPrintComponent,
  PrintPagesCompletedAcceptancePrintComponent,
  PrintPagesFiewDesignDeclarePrintComponent,
  InvestigateFormComponent,];

const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ApplyFormRoutingModule,
    LayoutModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ApplyFormModule { }
