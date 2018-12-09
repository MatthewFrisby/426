import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {User} from '@models/user.model';
import { Airport } from '@models/airport.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class FlightService {




  private _url: string = "http://comp426.cs.unc.edu:3001"

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






}
