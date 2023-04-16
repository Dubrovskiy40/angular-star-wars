import {Component} from '@angular/core';
import {PeopleService} from "./people.service";
import {Observable} from "rxjs";
import {Hero} from "../../types";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  public people$!: Observable<Hero[]>;

  constructor(
    private readonly peopleService: PeopleService,
    ) {
    this.people$ = peopleService.getPeople();
  }
}
