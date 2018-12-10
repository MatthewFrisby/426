import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Airport } from '@models/airport.model';
import { Flight } from '@models/flight.model';
import { Ticket } from '@models/ticket.model';






import {FlightService } from '@services/flight.service';

@Component({
  selector: 'find-root',
  templateUrl: './find_flight.component.html',
  providers: [FlightService]
})


export class FindFlight implements OnInit{

    air: Airport;
    fli: Flight;
    rand: Airport;
    code: string;
    bool=false;
    ticket: FormGroup;
    submitted = false;
    newTicket = new Ticket;
    test: {ticket: Ticket};
    recievedTicket: Ticket[];

    constructor(
        private router: Router,
        private flight: FlightService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {
    }
    ngOnInit() {
      this.code = this.route.snapshot.paramMap.get("code")
        this.flight.filterAirports(this.code).subscribe(data => {this.air = data["0"] } );
        this.flight.filterAirports("").subscribe(data => {this.rand = data[Math.floor(Math.random() * 99)] } );

        this.ticket = this.formBuilder.group({
            first_name: [''],
            last_name: ['' ],
            age: [''],
            gender: ['']
        });
    }

    onKey(event: any) {

     this.flight.findFlights(event.target.value).subscribe(data => {this.fli = data[Math.floor(Math.random() * 4)] } ); //.subscribe(data => this.air = data);

  }



  onClickMe(){
    this.bool = true;
  }
  tryAgain(){
    const code = this.route.snapshot.paramMap.get("code")
      this.flight.filterAirports(code).subscribe(data => {this.air = data["0"] } );
      this.flight.filterAirports("e").subscribe(data => {this.rand = data[Math.floor(Math.random() * 99)] } );
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ticket.invalid) {
          return;
      }




    this.newTicket.first_name= this.ticket.controls['first_name'].value;

    this.newTicket.last_name = this.ticket.controls['last_name'].value;
    this.newTicket.age = this.ticket.controls['age'].value;
    this.newTicket.gender = this.ticket.controls['gender'].value;
    this.newTicket.is_purchased = true;
    this.newTicket.info = ("Departing From: "+ this.air.name + "       "+ "Arriving At: "+ this.rand.name);
    this.newTicket.price_paid= (Math.floor(Math.random() * 200+261)+.19);


    this.flight.createTicket(this.newTicket).subscribe(data=>{this.recievedTicket = data});
    console.log(this.recievedTicket)
  }




  }
