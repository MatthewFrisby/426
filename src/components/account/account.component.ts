import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Ticket } from '@models/ticket.model';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'account-root',
  templateUrl: './account.component.html',
  providers: [FlightService]
})


export class Account implements OnInit {


    tickets: Ticket[];

    constructor(

        private router: Router,
        private flight: FlightService
    ) {
        // redirect to home if already logged in

    }

    ngOnInit() {
      this.flight.getTicket().subscribe(data=>{this.tickets=data});


    }

    // convenience getter for easy access to form fields

}
