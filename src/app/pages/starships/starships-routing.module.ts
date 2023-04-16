import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StarshipsComponent} from "./starships.component";

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
    data: {
      title: 'Корабли',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsRoutingModule { }
