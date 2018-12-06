import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Airport } from '@models/airport.model';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'first-root',
  templateUrl: './first.component.html',
  providers: [FlightService],
  template:
  `<button (click)="onClickMe()">Click me!</button>
    {{sdata | json}}`
})


export class First{

    constructor(
        private router: Router,
        private flight: FlightService

    ) {}


    onClickMe(){

      const sdata = this.flight.allAirports().subscribe();
      return sdata
  }
}
