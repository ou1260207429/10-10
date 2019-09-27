import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCompletedAcceptanceAssemblyComponent } from './completed-acceptance-assembly/completed-acceptance-assembly.component';
import { DetailsFireAcceptanceAssemblyComponent } from './fire-acceptance-assembly/fire-acceptance-assembly.component';
import { DetailsFireDesignDeclareAssemblyComponent } from './fire-design-declare-assembly/fire-design-declare-assembly.component';

const routes: Routes = [

  {
    path: 'completed-acceptance-assembly',
    component: DetailsCompletedAcceptanceAssemblyComponent,
    data: { title: "已办流程详情" },
  },
  {
    path: 'fire-acceptance-assembly',
    component: DetailsFireAcceptanceAssemblyComponent,
    data: { title: "已办流程详情" },
  },
  {
    path: 'fire-design-declare-assembly',
    component: DetailsFireDesignDeclareAssemblyComponent,
    data: { title: "已办流程详情" },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
