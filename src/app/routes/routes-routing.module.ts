import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { AppMenus } from '@shared/AppMenus';
import { LayoutAccountComponent } from '../layout/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAccountComponent,

    children: [
      { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      // { path: 'catagory', loadChildren: () => import('./catagory/catagory.module').then(m => m.CatagoryModule) },



    ],
  },
  {
    path: 'home',
    component: LayoutDefaultComponent,

    children: [

      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

    ],
  },
  {
    path: 'exception',
    component: LayoutFullScreenComponent,

    children: [

      { path: '', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },

    ],
  },

  {
    path: 'user-center',
    component: LayoutDefaultComponent,

    children: [

      { path: '', loadChildren: () => import('./user-center/user-center.module').then(m => m.UserCenterModule) },

    ],
  },
  // 单页不包裹Layout
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
