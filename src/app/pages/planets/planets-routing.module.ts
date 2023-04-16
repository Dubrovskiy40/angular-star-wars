import {NgModule} from '@angular/core';
import {PlanetsComponent} from "./planets.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    data: {
      title: 'Планеты',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
