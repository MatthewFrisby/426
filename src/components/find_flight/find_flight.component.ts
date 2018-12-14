import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Airport } from '@models/airport.model';
import { Flight } from '@models/flight.model';
import { Ticket } from '@models/ticket.model';
import {FlightService } from '@services/flight.service';
import { News } from '@models/news.model';
import { Article } from '@models/article.model';
import { Itinerary } from '@models/itinerary.model';
import { Instance } from '@models/instance.model';

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
    recievedTicket: Ticket[];
    article: Article;
    news: News;
    instance = new Instance;
    itinerary = new Itinerary;
    recievedInstance: Instance;
    recievedItinerary: Itinerary;

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
            last_name: [''],
            email: [''],
            age: [''],
            gender: ['']
        });
    }

    onKey(event: any) {

     this.flight.findFlights(event.target.value).subscribe(data => {this.fli = data[Math.floor(Math.random() * 10)] } ); //.subscribe(data => this.air = data);
     this.flight.findNews(this.rand.city).subscribe(data=>{ this.news = data});
     this.article = this.news.articles["0"];


  }



  onClickMe(){
    this.bool = true;
  }
  tryAgain(){
    const code = this.route.snapshot.paramMap.get("code")
      this.flight.filterAirports(code).subscribe(data => {this.air = data["0"] } );
      this.flight.filterAirports("e").subscribe(data => {this.rand = data[Math.floor(Math.random() * 99)] } );
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("done"));
}

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ticket.invalid) {
          return;
      }


    this.itinerary.email = this.ticket.controls['email'].value;
    this.itinerary.confirmation_code = Math.random().toString(36).substring(2, 7);
    this.flight.createItinerary(this.itinerary).subscribe(data => {this.recievedItinerary = data});
    this.delay(1500);

    this.instance.flight_id = this.fli.id;
    this.instance.date = this.fli.departs_at.substring(0, 10);
    this.instance.is_cancelled = false;
    this.flight.createInstance(this.instance).subscribe(data => {this.recievedInstance = data });

    this.delay(1500);

    this.newTicket.first_name= this.ticket.controls['first_name'].value;
    this.newTicket.last_name = this.ticket.controls['last_name'].value;
    this.newTicket.age = this.ticket.controls['age'].value;
    this.newTicket.gender = this.ticket.controls['gender'].value;
    this.newTicket.is_purchased = true;
    this.newTicket.info = ("Departing From: "+ this.air.name + "\n\n"+ "Arriving At: "+ this.rand.name);
    this.newTicket.price_paid= (Math.floor(Math.random() * 400+261)+.19);
    this.newTicket.itinerary_id = this.recievedItinerary.id;
    this.newTicket.instance_id = this.recievedInstance.id;
    this.flight.createTicket(this.newTicket).subscribe(data=>{this.recievedTicket = data});



  }




  }
