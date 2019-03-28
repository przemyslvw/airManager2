import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Flight } from '../models/flight.model';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  flights$: Observable<Flight[]> = this.FlightsService.getFlights();

  constructor(
    private dialog: MatDialog,
    private FlightsService: FlightsService) { }

  oppenNewFlightModal() {
    this.dialog.open(NewFlightComponent)
  }
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log("elo");
  }

}


