// import { AgencyDoneDetailsComponent } from './agency-done-details/agency-done-details.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WorkMattersRoutingModule } from './work-matters-routing.module';
import { WorkMattersService } from './work-matters.service';
import { WorkMattersAgencyDoneComponent } from './agency-done/agency-done.component';
import { WorkMattersAllDoneComponent } from './all-done/all-done.component';
import { WorkMattersAlreadyDoneComponent } from './already-done/already-done.component';

const COMPONENTS = [

  WorkMattersAgencyDoneComponent,
  WorkMattersAllDoneComponent,
  WorkMattersAlreadyDoneComponent];
const COMPONENTS_NOROUNT = [
];

@NgModule({
  imports: [
    SharedModule,
    //  ComponentsModule,
    // PipesModule,
    WorkMattersRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,

  ],
  providers: [WorkMattersService],
  entryComponents: COMPONENTS_NOROUNT
})
export class WorkMattersModule { }
