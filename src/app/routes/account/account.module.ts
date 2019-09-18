import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AccountRoutingModule } from './account-routing.module';
import { Redirect2Login } from './login/redirect2Login';

const COMPONENTS = [
  Redirect2Login
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],

  entryComponents: COMPONENTS_NOROUNT
})
export class AccountModule { }
