import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, expand, Observable, reduce} from "rxjs";
import {StarWarsData, Vehicle} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private readonly URL_VEHICLES = 'https://swapi.dev/api/vehicles/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getVehicles(): Observable<Vehicle[]> {
    return this.http.get<StarWarsData>(this.URL_VEHICLES)
      .pipe(
        expand((response) => response.next ? this.http.get<StarWarsData>(response.next) : EMPTY),
        reduce((acc: Vehicle[], current: StarWarsData) => acc.concat(current.results), [])
      )
  }
}
