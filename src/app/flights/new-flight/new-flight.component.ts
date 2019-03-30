import { FlightsService } from './../../core/services/flights.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  constructor(
    private flightService: FlightsService,
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

  private onCreatingSuccess() {
    this.dialogRef.close();
  }
  private onCreatingFailure() {
    console.log('jakiś error');
  }

  createFlight() {
    console.log(this.flightForm);
    this.flightService.addFlight(this.flightForm.form.value).then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))


  }
}
