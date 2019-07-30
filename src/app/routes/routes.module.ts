import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';

import { AccountModule } from './account/account.module';
import { ContentManageModule } from './content-manage/content-manage.module';
import { BigScreenModule } from './big-screen/big-screen.module';

const COMPONENTS = [

];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule,
    AccountModule, ContentManageModule, BigScreenModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
