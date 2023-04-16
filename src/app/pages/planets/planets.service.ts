import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, expand, Observable, reduce} from "rxjs";
import {Planet, StarWarsData} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private readonly URL_PLANETS = 'https://swapi.dev/api/planets/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getPlanets(): Observable<Planet[]> {
    return this.http.get<StarWarsData>(this.URL_PLANETS)
      .pipe(
        expand((response) => response.next ? this.http.get<StarWarsData>(response.next) : EMPTY),
        reduce((acc: Planet[], current: StarWarsData) => acc.concat(current.results), [])
      )
  }
}
