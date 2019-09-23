import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsUnitProjectStatisComponent } from './unit-project-statis/unit-project-statis.component';
import { StatisticsWeeklyStatisticsComponent } from './weekly-statistics/weekly-statistics.component';

const routes: Routes = [

  { path: 'unit-project-statis', component: StatisticsUnitProjectStatisComponent },
  { path: 'weekly-statistics', component: StatisticsWeeklyStatisticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
