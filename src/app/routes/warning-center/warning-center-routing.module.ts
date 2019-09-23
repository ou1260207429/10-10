import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningCenterWarningCenterComponent } from './warning-center/warning-center.component';

const routes: Routes = [

  { path: 'warning-center', component: WarningCenterWarningCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningCenterRoutingModule { }
