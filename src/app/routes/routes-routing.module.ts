import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutFullScreenComponent,

    children: [
      { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      // Exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
    ],
  },

  // {
  //   path: '',
  //   component: LayoutFullScreenComponent,
  //   data: { title: '首页' },
  //   children: [
  //     { path: '', loadChildren: './account/account.module#AccountModule' },
  //     { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
  //   ],
  // },
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
