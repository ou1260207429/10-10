import { NgModule } from '@angular/core';
import { ContentManageRoutingModule } from './content-manage-routing.module';
import { SharedModule } from '@shared';
import { ContentManagePoliciesAndRegulationsComponent } from './policies-and-regulations/policies-and-regulations.component';
import { ContentManageHandlingGuideComponent } from './handling-guide/handling-guide.component';
import { ContentManageFormDownloadComponent } from './form-download/form-download.component';
import { ContentManageHandlingGuidDetailComponent } from './handling-guid-detail/handling-guid-detail.component';



const COMPONENTS = [
  ContentManagePoliciesAndRegulationsComponent,
  ContentManageHandlingGuideComponent,
  ContentManageFormDownloadComponent,
  ContentManageHandlingGuidDetailComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    // PipesModule,
    ContentManageRoutingModule,
    // UEditorModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT,],
  entryComponents: COMPONENTS_NOROUNT
})
export class ContentManageModule { }
