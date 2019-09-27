import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { OrgSettingRoutingModule } from './org-setting-routing.module';
import { FlowTemplateListComponent } from './flow-template/flow-template-list';
import { FlowTemplateNodeComponent } from './flow-template/flow-template-node';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { CheckboxNumberDirective } from 'src/app/directive/checkboxNumber.directive';

const COMPONENTS = [
    FlowTemplateListComponent,
    FlowTemplateNodeComponent,
];
const COMPONENTS_NOROUNT = [];

@NgModule({
    imports: [
        SharedModule,
        OrgSettingRoutingModule,
    ],
    declarations: [
        ...COMPONENTS,
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT
})
export class OrgSettingModule { }
