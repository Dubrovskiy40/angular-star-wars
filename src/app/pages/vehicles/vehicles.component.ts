import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Vehicle} from "../../types";
import {VehiclesService} from "./vehicles.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  public vehicles$!: Observable<Vehicle[]>;

  constructor(
    private readonly vehiclesService: VehiclesService,
  ) {
    this.vehicles$ = vehiclesService.getVehicles();
  }
}
