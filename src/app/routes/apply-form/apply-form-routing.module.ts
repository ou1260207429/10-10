import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintPagesAcceptanceManagementPrintComponent } from './acceptance-management-print/acceptance-management-print.component';
import { PrintPagesCompletedAcceptancePrintComponent } from './completed-acceptance-print/completed-acceptance-print.component';
import { PrintPagesFiewDesignDeclarePrintComponent } from './fiew-design-declare-print/fiew-design-declare-print.component';
import { LayoutDefaultComponent } from 'src/app/layout/default/default.component';
import { LayoutFullScreenComponent } from 'src/app/layout/fullscreen/fullscreen.component';
import { InvestigateFormComponent } from './investigate-form/investigate-form';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'investigate-form',
        component: InvestigateFormComponent
      },
    ],
  },
  {
    path: 'print',
    component: LayoutFullScreenComponent,
    children: [
      {
        path: 'acceptance-management-print',
        component: PrintPagesAcceptanceManagementPrintComponent,
        data: { title: '消防验收打印', reuse: false },
      },
      {
        path: 'completed-acceptance-print',
        component: PrintPagesCompletedAcceptancePrintComponent,
        data: { title: '竣工验收打印', reuse: false },
      },
      {
        path: 'fiew-design-declare-print',
        component: PrintPagesFiewDesignDeclarePrintComponent,
        data: { title: '消防设计打印', reuse: false },
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyFormRoutingModule { }
