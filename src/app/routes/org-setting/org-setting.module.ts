import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { OrgSettingRoutingModule } from './org-setting-routing.module';
import { FlowTemplateListComponent } from './flow-template/flow-template-list';

const COMPONENTS = [
    FlowTemplateListComponent,
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
