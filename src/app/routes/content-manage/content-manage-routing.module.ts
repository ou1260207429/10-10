import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PoliciesAndRegulationsComponent,
  //   data: { title: "政策法规" }
  // },
  // {
  //   path: 'policiesAndRegulationsComponent',
  //   component: PoliciesAndRegulationsComponent,
  //   data: { title: "政策法规" }
  // }, {
  //   path: 'policiesAndRegulationsDetailsComponent/:id',
  //   component: PoliciesAndRegulationsDetailsComponent,
  //   data: { title: "政策法规详情" }
  // }, {
  //   path: 'handlingGuideComponent',
  //   component: HandlingGuideComponent,
  //   data: { title: "办事指南" }
  // }, {
  //   path: 'handlingGuidDetailComponent/:id',
  //   component: HandlingGuidDetailComponent,
  //   data: { title: "办事指南详情" }
  // }, {
  //   path: 'formDownloadComponent',
  //   component: FormDownloadComponent,
  //   data: { title: "表格下载" }
  // }, {
  //   path: 'formDownloadDetailComponent',
  //   component: FormDownloadDetailComponent,
  //   data: { title: "表格下载详情" }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManageRoutingModule { }
