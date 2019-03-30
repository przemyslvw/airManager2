import { Crew } from './../../models/flight.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// import { flightCodeValidator } from './code.validator';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label: 'Stweardes', value: 'stweardes' },
    { label: 'Cabin Crew', value: 'cabincrew' },
    { label: 'Pilot', value: 'pilot' },
    { label: 'Co-Pilot', value: 'copilot' },
    { label: 'Mechanic', value: 'mechanic' },
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      code: ['SK', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7)
        ]
      }],
      additionalInformarion: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    })
  }

}
