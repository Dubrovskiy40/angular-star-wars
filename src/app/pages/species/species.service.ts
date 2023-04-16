import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, expand, Observable, reduce} from "rxjs";
import {Specie, StarWarsData} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private readonly URL_SPECIES = 'https://swapi.dev/api/species/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getSpecies(): Observable<Specie[]> {
    return this.http.get<StarWarsData>(this.URL_SPECIES)
      .pipe(
        expand((response) => response.next ? this.http.get<StarWarsData>(response.next) : EMPTY),
        reduce((acc: Specie[], current: StarWarsData) => acc.concat(current.results), [])
      )
  }
}
