import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Redirect2Login } from './login/redirect2Login';

const routes: Routes = [

  {
    path: 'redirect2Login',
    component: Redirect2Login,
    data: {
      title: "登录"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
