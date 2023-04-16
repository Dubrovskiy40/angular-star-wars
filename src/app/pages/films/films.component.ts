import { Component } from '@angular/core';
import {FilmsService} from "./films.service";
import {Observable} from "rxjs";
import {Film} from "../../types";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  public films$!: Observable<Film[]>;

  constructor(private readonly filmsService: FilmsService) {
    this.films$ = this.filmsService.getFilms();
  }
}
