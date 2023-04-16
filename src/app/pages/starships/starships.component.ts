import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StarShip} from "../../types";
import {StarShipsService} from "./star-ships.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  public starShips$!: Observable<StarShip[]>;

  constructor(
    private readonly starShipsService: StarShipsService,
  ) {
    this.starShips$ = starShipsService.getStarShips();
  }
}
