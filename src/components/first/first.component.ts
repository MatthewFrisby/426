import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'first-root',
  templateUrl: './first.component.html',
  providers: [FlightService],
  template:
  `<button (click)="onClickMe()">Click me!</button>
    {{data | json}} YO`
})


export class First{

    constructor(
        private router: Router,
        private flight: FlightService,

    ) {}

    onClickMe(){
    const data = this.flight.allAirports()
  }
}
