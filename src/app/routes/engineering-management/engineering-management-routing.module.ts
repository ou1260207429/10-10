import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringManagementCompletedAcceptanceComponent } from './completed-acceptance/completed-acceptance.component';
import { EngineeringManagementDraftsComponent } from './drafts/drafts.component';
import { EngineeringManagementFireAcceptanceComponent } from './fire-acceptance/fire-acceptance.component';
import { EngineeringManagementFireDesignComponent } from './fire-design/fire-design.component';

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


  {
    path: 'completed-acceptance',
    component: EngineeringManagementCompletedAcceptanceComponent,
    data: { title: "竣工验收备案" },
  },
  {
    path: 'drafts',
    component: EngineeringManagementDraftsComponent,
    data: { title: "草稿箱" },
  },
  {
    path: 'fire-acceptance',
    component: EngineeringManagementFireAcceptanceComponent,
    data: { title: "消防验收管理" },

  },
  {
    path: 'fire-design',
    component: EngineeringManagementFireDesignComponent,
    data: { title: "消防设计审查" },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringManagementRoutingModule { }
