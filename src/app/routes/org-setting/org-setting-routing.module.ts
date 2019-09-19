import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    //   {
    //     path: '', component: HomeWelcomeComponent, data: {
    //       title: "欢迎"
    //     }
    //   }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrgSettingRoutingModule { }
