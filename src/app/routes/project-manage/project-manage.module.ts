import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProjectManageRoutingModule } from './project-manage-routing.module';
import { ProjectManageService } from './project-manage.service';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    // FormsModule,
    // ComponentsModule,
    // NgZorroAntdModule,
    // ReactiveFormsModule,
    ProjectManageRoutingModule,

  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT,
  providers: [
    ProjectManageService,
  ]
})
export class ProjectManageModule { }
