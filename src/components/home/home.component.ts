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
  selector: 'home-root',
  templateUrl: './home.component.html',
  providers: [FlightService],

})

//<input (keyup)="onKey($event)">
//<p>{{values}}</p>


// <b> {{airport.city}} </b>
// </li>
//<button (click)="onClickMe()">Airport Name</button>
//  {{air | json}}
//  <br>
//  <h1>{{test}}</h1>

export class Home implements OnInit{

    air: Airport[];
    test: string;
    airport: any;
    selectedAirport:Airport;
    constructor(
        private router: Router,
        private flight: FlightService,


    ) {}

    ngOnInit() {
      //this.flight.allAirports().subscribe(data => {this.air = data } );
    }

    onKey(event: any) {

     this.flight.filterAirports(event.target.value).subscribe(data => {this.air = data } );//.subscribe(data => this.air = data);

  }
    onSelect(airport: Airport){
      this.selectedAirport = airport;

    }




    onClickMe(){
      //this.test = this.air.name;

  }

}
