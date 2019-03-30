import { Crew } from './../../models/flight.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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

  addCrewMember(Crew) {
    this.crew.push(this.buildCrewMamber());
    console.log(this.form);
  }

  buildCrewMamber() {
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
      code: '',
      additionalInformarion: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMamber()])
    })
  }

}
