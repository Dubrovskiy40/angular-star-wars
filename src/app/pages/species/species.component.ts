import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Specie} from "../../types";
import {SpeciesService} from "./species.service";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
  public species$!: Observable<Specie[]>;

  constructor(
    private readonly speciesService: SpeciesService,
  ) {
    this.species$ = speciesService.getSpecies();
  }
}
