import { NgModule } from '@angular/core';
import { CheckboxNumberDirective } from './checkboxNumber.directive';

@NgModule({
    declarations: [
        CheckboxNumberDirective,
    ],
    exports: [
        CheckboxNumberDirective,
    ]
})
export class DirectiveModule { }
