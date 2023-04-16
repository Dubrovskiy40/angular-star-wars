import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Film, StarWarsData} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly URL_FILMS = 'https://swapi.dev/api/films/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getFilms(): Observable<Film[]> {
    return this.http.get<StarWarsData>(this.URL_FILMS)
      .pipe(map((data) => data.results))
  }
}
