import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  OnInit, AfterViewChecked } from '@angular/core';
import { first } from 'rxjs/operators';
import { Ticket } from '@models/ticket.model';
import { Itinerary } from '@models/itinerary.model';
import { Instance } from '@models/instance.model';

import {FlightService } from '@services/flight.service';

@Component({
  selector: 'ticket-root',
  templateUrl: './ticket.component.html',
  providers: [FlightService]
})


export class TicketDetails implements AfterViewChecked {

    id: string;
    oneTicket: Ticket;
    copy: Ticket;
    instanceID: string;
    itineraryID: string;
    itinerary: Itinerary;
    instance: Instance;
    tick=false;
    inst=false;
    itin=false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private flight: FlightService
    ) {
        // redirect to home if already logged in

    }

     ngAfterViewChecked() {
      this.id = this.route.snapshot.paramMap.get("id");


    }

ticketL(){
  this.flight.getSingleTicket(this.id).subscribe(data=>{this.oneTicket = data});
  console.log(this.oneTicket)
  this.itineraryID = ""+this.oneTicket.itinerary_id;
  this.instanceID = ""+this.oneTicket.instance_id;
  this.tick = true;
}
instanceL(){
  this.flight.getInstance(this.instanceID).subscribe(data => {this.instance = data});

  this.inst = true;


}

itineraryL(){
  this.flight.getItinerary( this.itineraryID).subscribe(data => {this.itinerary = data});
  this.itin = true;
}
}
