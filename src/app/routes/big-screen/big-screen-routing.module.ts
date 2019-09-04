import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigScreenScreenContentComponent } from './screen-content/screen-content.component';

const routes: Routes = [

  { path: 'screen-content', component: BigScreenScreenContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigScreenRoutingModule { }
