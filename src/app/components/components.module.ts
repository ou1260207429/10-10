import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { SelectorOrgComponent } from './selector/selector-org';



@NgModule({
  declarations: [
    TinyEditorComponent,
    SelectorOrgComponent,
  ],
  imports: [
    SharedModule,

  ],
  exports: [
    TinyEditorComponent,
    SelectorOrgComponent,
  ],

  entryComponents: [
    TinyEditorComponent,
    SelectorOrgComponent,
  ]
})
export class ComponentsModule { }
