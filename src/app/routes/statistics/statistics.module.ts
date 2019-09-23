import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsUnitProjectStatisComponent } from './unit-project-statis/unit-project-statis.component';
import { StatisticsWeeklyStatisticsComponent } from './weekly-statistics/weekly-statistics.component';

const COMPONENTS = [
  StatisticsUnitProjectStatisComponent,
  StatisticsWeeklyStatisticsComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    StatisticsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class StatisticsModule { }
