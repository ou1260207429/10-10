import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintPagesAcceptanceManagementPrintComponent } from './acceptance-management-print/acceptance-management-print.component';
import { PrintPagesCompletedAcceptancePrintComponent } from './completed-acceptance-print/completed-acceptance-print.component';
import { PrintPagesFiewDesignDeclarePrintComponent } from './fiew-design-declare-print/fiew-design-declare-print.component';

const routes: Routes = [

  { path: 'acceptance-management-print', component: PrintPagesAcceptanceManagementPrintComponent },
  { path: 'completed-acceptance-print', component: PrintPagesCompletedAcceptancePrintComponent },
  { path: 'fiew-design-declare-print', component: PrintPagesFiewDesignDeclarePrintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintPagesRoutingModule { }
