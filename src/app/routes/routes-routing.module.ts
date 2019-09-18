import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutAccountComponent } from '../layout/account/account.component';
import { HomeWelcomeComponent } from './home/welcome/welcome.component';
import { CustomGuard } from '../services/custom-guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [CustomGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      // { path: 'catagory', loadChildren: () => import('./catagory/catagory.module').then(m => m.CatagoryModule) },
      { path: 'engineering-management', loadChildren: './engineering-management/engineering-management.module#EngineeringManagementModule' },
      // { path: 'engineering-management', loadChildren: () => import('./engineering-management/engineering-management.module').then(m => m.EngineeringManagementModule) },
      // { path: 'work-matters', loadChildren: () => import('./work-matters/work-matters.module').then(m => m.WorkMattersModule) },
      { path: 'work-matters', loadChildren: './work-matters/work-matters.module#WorkMattersModule' },
      { path: 'user-center', loadChildren: () => import('./user-center/user-center.module').then(m => m.UserCenterModule) },
    ],
  },
  {
    path: '',
    component: LayoutFullScreenComponent,
    children: [
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      // Exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
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
