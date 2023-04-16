import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/people' },
  { path: 'people', loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule) },
  { path: 'planets', loadChildren: () => import('./pages/planets/planets.module').then(m => m.PlanetsModule) },
  { path: 'films', loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule) },
  { path: 'species', loadChildren: () => import('./pages/species/species.module').then(m => m.SpeciesModule) },
  { path: 'vehicles', loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesModule) },
  { path: 'starships', loadChildren: () => import('./pages/starships/starships.module').then(m => m.StarshipsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
