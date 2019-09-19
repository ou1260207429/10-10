import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowTemplateListComponent } from './flow-template/flow-template-list';

const routes: Routes = [

    {
        path: 'flow-template-list', component: FlowTemplateListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrgSettingRoutingModule { }
