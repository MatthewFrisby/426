import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Airport } from '@models/airport.model';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'first-root',
  templateUrl: './first.component.html',
  providers: [FlightService],
  template:
  `<button (click)="onClickMe()">Click me!</button>
    {{air | json}}
    <br>
    <h1>{{test}}</h1>
    `
})


export class First{

    air: Airport[];
    test: string;
    airport: any;
    constructor(
        private router: Router,
        private flight: FlightService,


    ) {}


    onClickMe(){

    this.flight.allAirports().subscribe(data => this.air = data);
    this.test = JSON.stringify(this.air);
  }

}
