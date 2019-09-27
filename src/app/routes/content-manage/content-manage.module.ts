import { NgModule } from '@angular/core';
import { ContentManageRoutingModule } from './content-manage-routing.module';
import { SharedModule } from '@shared';
import { ContentManagePoliciesAndRegulationsComponent } from './policies-and-regulations/policies-and-regulations.component';
import { ContentManageHandlingGuideComponent } from './handling-guide/handling-guide.component';
import { ContentManageFormDownloadComponent } from './form-download/form-download.component';
import { ContentManageHandlingGuidDetailComponent } from './handling-guid-detail/handling-guid-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContentManagePoliciesAndRegulationsDetailsComponent } from './policies-and-regulations-details/policies-and-regulations-details.component';
import { ContentManageFormDownloadDetailComponent } from './form-download-detail/form-download-detail.component';



const COMPONENTS = [
  ContentManagePoliciesAndRegulationsComponent,
  ContentManageHandlingGuideComponent,
  ContentManageFormDownloadComponent,
  ContentManageHandlingGuidDetailComponent,
  ContentManagePoliciesAndRegulationsDetailsComponent,
  ContentManageFormDownloadDetailComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    // PipesModule,
    ContentManageRoutingModule,
    // UEditorModule
    ComponentsModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT,],
  entryComponents: COMPONENTS_NOROUNT
})
export class ContentManageModule { }
