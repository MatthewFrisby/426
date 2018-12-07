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
  `<input (keyup)="onKey($event)">
  <p>{{values}}</p>
  <button (click)="onClickMe()">Airport Name</button>
    {{air | json}}
    <br>
    <h1>{{test}}</h1>
    `
})


export class First implements OnInit{

    air: Airport[];
    test: string;
    airport: any;
    constructor(
        private router: Router,
        private flight: FlightService,


    ) {}

    ngOnInit() {

    }

    onKey(event: any) {
      this.flight.allAirports(event.target.value).subscribe(data => {this.air = data["0"] } );//.subscribe(data => this.air = data);

  }




    onClickMe(){
      this.test = this.air.name;

  }

}
