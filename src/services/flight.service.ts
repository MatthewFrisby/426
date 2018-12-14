import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@models/user.model';
import { Airport } from '@models/airport.model';
import { Flight } from '@models/flight.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Ticket } from '@models/ticket.model';
import { Article } from '@models/article.model';
import { News } from '@models/news.model';
import { Itinerary } from '@models/itinerary.model';
import { Instance } from '@models/instance.model';


@Injectable()
export class FlightService {

  private _url: string = "http://comp426.cs.unc.edu:3001"
  private _news: string = "https://newsapi.org/v2/everything?pageSize=1&q="
  private news_: string = "%20city&apiKey=fb033527902d4bc89e9706ddea1244f0"

  constructor(private http: HttpClient) { }

  createUser(user: User[]): Observable<User[]>{
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.post<User[]>(this._url+'/users', ({user: user}), { headers, withCredentials: true } )
  }

  loginUser(user: User[]): Observable<User[]>{
    const httpPostOptions ={withCredentials: true}
    return this.http.post<User[]>(this._url+'/sessions', ({user: user}))
  }

  logoutUser(){
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.delete(this._url+'/sessions', { headers, withCredentials: true } )
  }

  allAirports(): Observable<Airport[]>{
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.get<Airport[]>(this._url+'/airports', { headers, withCredentials: true } );
  }

  filterAirports(code: string): Observable<Airport[]>{
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.get<Airport[]>(this._url+'/airports?filter[code_ilike]='+code, { headers, withCredentials: true } );
  }

  findFlights(time: string): Observable<Flight[]>{
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.get<Flight[]>(this._url+'/flights?filter[departs_at_ge]='+time, { headers, withCredentials: true } );
  }

  createItinerary(itinerary: Itinerary): Observable<Itinerary>{
    const headers = new HttpHeaders({ 'Content':"application/json",'Content-Type': 'Content-Type: application/json'});
    return this.http.post<Itinerary>(this._url+'/itineraries',({itinerary: itinerary}), {withCredentials: true } )
  }

  createTicket(ticket: Ticket): Observable<Ticket[]>{
   const headers = new HttpHeaders({ 'Content':"application/json",'Content-Type': 'Content-Type: application/json'});
   return this.http.post<Ticket[]>(this._url+'/tickets',({ticket: ticket}), { withCredentials: true } )
 }

  createInstance(instance: Instance): Observable<Instance>{
    const headers = new HttpHeaders({ 'Content':"application/json",'Content-Type': 'Content-Type: application/json'});
    return this.http.post<Instance>(this._url+'/instances',({instance: instance}), {withCredentials: true } )
  }

  getTicket(): Observable<Ticket[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'Content-Type: application/json'});
    return this.http.get<Ticket[]>(this._url+'/tickets', { withCredentials: true } )
  }


  findNews(cityName): Observable<News[]>{
    const headers = new HttpHeaders({'Content-Type': 'Content-Type: application/json'});
    return this.http.get<News[]>(this._news + cityName + this.news_);
  }

  getSingleTicket(id: string): Observable<Ticket>{
    const headers = new HttpHeaders({ 'Content-Type': 'Content-Type: application/json'});
    return  this.http.get<Ticket>(this._url+'/tickets/'+id, { withCredentials: true } )
  }

  getItinerary(id: string): Observable<Itinerary>{
    const headers = new HttpHeaders({ 'Content-Type': 'Content-Type: application/json'});
    return this.http.get<Itinerary>(this._url+'/itineraries/'+id, { withCredentials: true } )
  }
  getInstance(id: string): Observable<Instance>{
    const headers = new HttpHeaders({ 'Content-Type': 'Content-Type: application/json'});
    return  this.http.get<Instance>(this._url+'/instances/'+id, { withCredentials: true } )
  }



}
