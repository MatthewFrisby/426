import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightService]
})


export class AppComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private flight: FlightService
    ) {
        // redirect to home if already logged in

    }

    ngOnInit() {

    }

    // convenience getter for easy access to form fields
    
}
