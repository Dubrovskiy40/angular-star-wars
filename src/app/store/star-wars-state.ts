import {Injectable, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {Selector, State, Store} from "@ngxs/store";
import {HttpClient} from "@angular/common/http";
import {StarWarsStateModel} from "../types";

const starWarsInitialState: StarWarsStateModel = {
  people: [],
  planets: [],
  films: [],
  species: [],
  vehicles: [],
  starships: [],

};

@State({
  name: 'starWarsState',
  defaults: starWarsInitialState,
})
@Injectable()
export class StarWarsState {
  constructor(
    private readonly router: Router,
    private readonly ngZone: NgZone,
    private readonly store: Store,
    private readonly http: HttpClient,
  ) {
  }

  @Selector()
  public static people(state: StarWarsStateModel) {
    return state.people;
  }
}
