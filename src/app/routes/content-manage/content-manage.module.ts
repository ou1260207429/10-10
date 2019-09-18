import { NgModule } from '@angular/core';
import { ContentManageRoutingModule } from './content-manage-routing.module';
import { SharedModule } from '@shared';



const COMPONENTS = [];
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
