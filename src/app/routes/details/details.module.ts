import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsCompletedAcceptanceAssemblyComponent } from './completed-acceptance-assembly/completed-acceptance-assembly.component';
import { DetailsFireAcceptanceAssemblyComponent } from './fire-acceptance-assembly/fire-acceptance-assembly.component';
import { DetailsFireDesignDeclareAssemblyComponent } from './fire-design-declare-assembly/fire-design-declare-assembly.component';

const COMPONENTS = [
  DetailsCompletedAcceptanceAssemblyComponent,
  DetailsFireAcceptanceAssemblyComponent,
  DetailsFireDesignDeclareAssemblyComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DetailsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DetailsModule { }
