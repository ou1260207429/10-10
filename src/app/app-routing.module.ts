import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRouteGuard } from '@shared/auth/auth-route-guard';
// import { IndexDefaultComponent } from '@layout/index-default/index-default.component';

// import { ACLGuard, ACLType } from '@delon/acl';

import { AppMenus } from "@shared/AppMenus";
import { LayoutFullScreenComponent } from './layout/fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from './layout/default/default.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutFullScreenComponent,
  //   data: { title: '首页' },
  //   children: [
  //     { path: '', loadChildren: './home/home.module#HomeModule' }
  //   ],
  // },

  {
    path: 'app',
    component: LayoutDefaultComponent,
    data: { title: '统计', preload: true },
    // canActivateChild: [AppRouteGuard],
    children: [
      {
        path: 'content-manage', loadChildren: './pages/content-manage/content-manage.module#ContentManageModule',
        data: {
          role: [AppMenus.aclOrg, AppMenus.aclCompany, AppMenus.aclSys]
        },

      },


    ],
  },
  // {
  //   path: 'big-screen/big',
  //   // canActivateChild: [AppRouteGuard],
  //   component: BigScreenComponent,
  //   data: {
  //     role: AppMenus.aclSys
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
