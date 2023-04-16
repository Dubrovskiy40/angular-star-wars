import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, expand, Observable, reduce} from "rxjs";
import {StarShip, StarWarsData} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class StarShipsService {
  private readonly URL_STAR_SHIPS = 'https://swapi.dev/api/starships/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getStarShips(): Observable<StarShip[]> {
    return this.http.get<StarWarsData>(this.URL_STAR_SHIPS)
      .pipe(
        expand((response) => response.next ? this.http.get<StarWarsData>(response.next) : EMPTY),
        reduce((acc: StarShip[], current: StarWarsData) => acc.concat(current.results), [])
      )
  }
}
