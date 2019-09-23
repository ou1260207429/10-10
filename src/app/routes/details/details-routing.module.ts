import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCompletedAcceptanceAssemblyComponent } from './completed-acceptance-assembly/completed-acceptance-assembly.component';
import { DetailsFireAcceptanceAssemblyComponent } from './fire-acceptance-assembly/fire-acceptance-assembly.component';
import { DetailsFireDesignDeclareAssemblyComponent } from './fire-design-declare-assembly/fire-design-declare-assembly.component';

const routes: Routes = [

  { path: 'completed-acceptance-assembly', component: DetailsCompletedAcceptanceAssemblyComponent },
  { path: 'fire-acceptance-assembly', component: DetailsFireAcceptanceAssemblyComponent },
  { path: 'fire-design-declare-assembly', component: DetailsFireDesignDeclareAssemblyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
