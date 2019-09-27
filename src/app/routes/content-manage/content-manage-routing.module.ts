import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentManagePoliciesAndRegulationsComponent } from './policies-and-regulations/policies-and-regulations.component';
import { ContentManageHandlingGuideComponent } from './handling-guide/handling-guide.component';
import { ContentManageFormDownloadComponent } from './form-download/form-download.component';
import { ContentManageHandlingGuidDetailComponent } from './handling-guid-detail/handling-guid-detail.component';
import { ContentManagePoliciesAndRegulationsDetailsComponent } from './policies-and-regulations-details/policies-and-regulations-details.component';
import { ContentManageFormDownloadDetailComponent } from './form-download-detail/form-download-detail.component';

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

  {
    path: 'policies-and-regulations',
    component: ContentManagePoliciesAndRegulationsComponent,
    data: { title: "政策法规" },
  },


  {
    path: 'handling-guide',
    component: ContentManageHandlingGuideComponent,
    data: { title: "办事指南" },
  },


  {
    path: 'form-download',
    component: ContentManageFormDownloadComponent,
    data: { title: "表格下载" },
  },


  {
    path: 'handling-guid-detail',
    component: ContentManageHandlingGuidDetailComponent,
    data: { title: "办事指南详情" },
  },
  {
    path: 'policies-and-regulations-details',
    component: ContentManagePoliciesAndRegulationsDetailsComponent,
    data: { title: "政策法规详情" },
  }
  ,
  {
    path: 'form-download-detail',
    component: ContentManageFormDownloadDetailComponent,
    data: { title: "表格下载详情" },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManageRoutingModule { }
