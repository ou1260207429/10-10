import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRouteGuard } from '@shared/auth/auth-route-guard';
// import { IndexDefaultComponent } from '@layout/index-default/index-default.component';

// import { ACLGuard, ACLType } from '@delon/acl';

import { AppMenus } from "@shared/AppMenus";
import { LayoutFullScreenComponent } from './layout/fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from './layout/default/default.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutFullScreenComponent,
    data: { title: '首页' },
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' }
    ],
  },
  // {
  //   path: '',
  //   component: LayoutFullScreenComponent,
  //   data: { title: '首页' },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: 'routes/routes.module#RoutesModule', // Lazy load account module
  //       data: { title: "登录", preload: true },
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   loadChildren: 'routes/routes.module#RoutesModule', // Lazy load account module
  //   data: { title: "登录", preload: true },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
