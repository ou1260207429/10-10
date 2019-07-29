import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLoginComponent } from './login/login.component';


const routes: Routes = [

  {
    path: 'login',
    component: AccountLoginComponent,
    data: {
      title: "登录"
    }
  }
  ,
  {
    path: '',
    component: AccountLoginComponent,
    data: {
      title: "登录"
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
