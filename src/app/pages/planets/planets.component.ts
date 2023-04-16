import { Component } from '@angular/core';
import {PlanetsService} from "./planets.service";
import {Observable} from "rxjs";
import {Planet} from "../../types";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent {
  public planets$!: Observable<Planet[]>;

  constructor(
    private readonly planetsService: PlanetsService,
  ) {
    this.planets$ = planetsService.getPlanets();
  }
}
