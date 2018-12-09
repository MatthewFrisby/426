import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'find-root',
  templateUrl: './find_flight.component.html',
  providers: [FlightService]
})


export class FindFlight{

    constructor(
        private router: Router,
        private flight: FlightService
    ) {
        // redirect to home if already logged in

    }


}
