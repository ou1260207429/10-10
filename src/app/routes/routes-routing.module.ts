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
      { path: 'engineering-management', loadChildren: './engineering-management/engineering-management.module#EngineeringManagementModule' },
      { path: 'work-matters', loadChildren: './work-matters/work-matters.module#WorkMattersModule' },
      { path: 'warning-center', loadChildren: './warning-center/warning-center.module#WarningCenterModule' },
      { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
      { path: 'details', loadChildren: './details/details.module#DetailsModule' },
      { path: 'user-center', loadChildren: () => import('./user-center/user-center.module').then(m => m.UserCenterModule) },
      { path: 'org-setting', loadChildren: './org-setting/org-setting.module#OrgSettingModule' },
      { path: 'content-manage', loadChildren: './content-manage/content-manage.module#ContentManageModule' },
    ],
  },
  {
    path: 'apply-form',
    // component: LayoutDefaultComponent,
    canActivate: [CustomGuard],
    children: [
      { path: '', canActivate: [CustomGuard], loadChildren: './apply-form/apply-form.module#ApplyFormModule' },
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
