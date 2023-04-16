import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero, StarWarsData} from "../../types";
import {EMPTY, expand, Observable, reduce} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly URL_PEOPLE = 'https://swapi.dev/api/people/';

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getPeople(): Observable<Hero[]> {
    return this.http.get<StarWarsData>(this.URL_PEOPLE)
      .pipe(
        expand((response) => response.next ? this.http.get<StarWarsData>(response.next) : EMPTY),
        reduce((acc: Hero[], current: StarWarsData) => acc.concat(current.results), [])
      )
  }
}
