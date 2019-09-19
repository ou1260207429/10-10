import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { OrgSettingRoutingModule } from './org-setting-routing.module';

const COMPONENTS = [
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
