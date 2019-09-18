import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // {
  //   path: 'addFireDesignDeclareComponent/:type/:projectId/:flowId',
  //   data: { title: '新增设计申报' ,reuse:true},
  //   component: AddFireDesignDeclareComponent
  // },

  // {
  //   path: 'addCompletedAcceptanceComponent/:type/:projectId/:flowId',
  //   data: { title: '新增备案申报',reuse:true },
  //   component: AddCompletedAcceptanceComponent
  // },

  // {
  //   path: 'addFireAcceptanceComponent/:type/:projectId/:flowId',
  //   data: { title: '新增验收审查申报',reuse:true },
  //   component: AddFireAcceptanceComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringManagementRoutingModule { }
