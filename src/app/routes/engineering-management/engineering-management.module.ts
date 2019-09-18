
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EngineeringManagementRoutingModule } from './engineering-management-routing.module';
import { EngManageService } from './engineering-management.service';


const COMPONENTS = [];
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
