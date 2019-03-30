import { FlightsService } from './../../core/services/flights.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material'
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
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.open("Odlot zarejestrowany ( ͡° ͜ʖ ͡°)", '', { panelClass: 'toast-success' });
  }
  private onCreatingFailure() {
    console.log('jakiś error');
    this.toast.open("Coś masz nie halo");
  }

  createFlight() {
    console.log(this.flightForm);
    this.flightService.addFlight(this.flightForm.form.value).then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))


  }
}
