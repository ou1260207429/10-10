import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';

@NgModule({
  declarations: [TinyEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TinyEditorComponent
  ],
  entryComponents: [
    TinyEditorComponent
  ]
})
export class ComponentsModule { }
