import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'add-acceptance/:type/:projectId/:flowId', component: ProjectManageAddAcceptanceComponent, data: { title: 'NEW新增验收审查申报', reuse: true } },
  // {
  //   path: '',
  //   component: ProjectManageAddDesignComponent,
  //   data: { title: '新增消防设计审查' }
  // },
  // {
  //   path: 'add-design',
  //   component: ProjectManageAddDesignComponent,
  //   data: { title: "新增消防设计审查" }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManageRoutingModule { }
