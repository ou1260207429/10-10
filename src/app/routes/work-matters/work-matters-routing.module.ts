import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkMattersAgencyDoneComponent } from './agency-done/agency-done.component';
import { WorkMattersAllDoneComponent } from './all-done/all-done.component';
import { WorkMattersAlreadyDoneComponent } from './already-done/already-done.component';

const routes: Routes = [
  // {
  //   path: 'formModuleComponent',
  //   component: FormModuleComponent
  // },
  // {
  //   path: 'alreadyDoneComponent',
  //   component: AlreadyDoneComponent,
  //   data: { title: '已办流程' },
  // },
  // // {
  // //   path: 'alreadyDoneDetailsComponent/:flowNo/:flowId/:flowPathType',
  // //   component: AlreadyDoneDetailsComponent,
  // //   data: { title: '已办流程详情', reuse: true },
  // // },
  // {
  //   path: 'agencyDoneComponent',
  //   component: AgencyDoneComponent,
  //   data: { title: '待办流程' },
  // },
  // // {
  // //   path: 'agencyDoneDetailsComponent/:flowNo/:flowId/:flowPathType/:operationType',
  // //   component: AgencyDoneDetailsComponent,
  // //   data: { title: '待办流程详情', reuse: true },
  // // },

  // {
  //   path: 'draftsComponent',
  //   component: DraftsComponent,
  //   data: { title: '草稿箱' },
  // },
  // {
  //   path: 'searchHadDone',
  //   component: SearchHadDoneComponent,
  //   data: { title: '办结查询' },
  // },

  // { path: 'review-apply/:flowId/:flowType', component: WorkMattersReviewApplyComponent, data: { title: '复查申请' } },

  // { path: 'sign-for/:flowId', component: SignForComponent, data: { title: '签收' } },

  // { path: 'all-done', component: WorkMattersAllDoneComponent, data: { title: '经办事项' } },

  { path: 'agency-done', component: WorkMattersAgencyDoneComponent },
  { path: 'all-done', component: WorkMattersAllDoneComponent },
  { path: 'already-done', component: WorkMattersAlreadyDoneComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkMattersRoutingModule { }
