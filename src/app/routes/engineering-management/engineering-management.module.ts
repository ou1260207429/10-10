
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EngineeringManagementRoutingModule } from './engineering-management-routing.module';
import { EngManageService } from './engineering-management.service';
import { EngineeringManagementCompletedAcceptanceComponent } from './completed-acceptance/completed-acceptance.component';
import { EngineeringManagementDraftsComponent } from './drafts/drafts.component';
import { EngineeringManagementFireAcceptanceComponent } from './fire-acceptance/fire-acceptance.component';
import { EngineeringManagementFireDesignComponent } from './fire-design/fire-design.component';


const COMPONENTS = [
  EngineeringManagementCompletedAcceptanceComponent,
  EngineeringManagementDraftsComponent,
  EngineeringManagementFireAcceptanceComponent,
  EngineeringManagementFireDesignComponent];
const COMPONENTS_NOROUNT = [
];

/**
 * 工程管理
 */
@NgModule({
  imports: [
    SharedModule,
    // ComponentsModule,
    EngineeringManagementRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,

  ],
  entryComponents: COMPONENTS_NOROUNT,
  providers: [
    EngManageService,
  ]
})

export class EngineeringManagementModule { }
