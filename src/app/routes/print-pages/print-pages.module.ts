import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PrintPagesRoutingModule } from './print-pages-routing.module';
import { PrintPagesAcceptanceManagementPrintComponent } from './acceptance-management-print/acceptance-management-print.component';
import { PrintPagesCompletedAcceptancePrintComponent } from './completed-acceptance-print/completed-acceptance-print.component';
import { PrintPagesFiewDesignDeclarePrintComponent } from './fiew-design-declare-print/fiew-design-declare-print.component';

const COMPONENTS = [
  PrintPagesAcceptanceManagementPrintComponent,
  PrintPagesCompletedAcceptancePrintComponent,
  PrintPagesFiewDesignDeclarePrintComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    PrintPagesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class PrintPagesModule { }
