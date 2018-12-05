import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {User} from '@models/user.model';
import  {NewPass} from '@models/userPassword.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class FlightService {
  


  private _url: string = "http://comp426.cs.unc.edu:3001"
  constructor(private http: HttpClient) { }


  createUser(user: User[]): Observable<User[]>{
    return this.http.post<User[]>(this._url+'/users', ({user: user}) )
  }

  loginUser(user: User[]): Observable<User[]>{
    return this.http.post<User[]>(this._url+'/sessions', ({user: user}) )
  }

  logoutUser(){
    return this.http.delete(this._url+'/sessions' )
  }

  newPassword(user: NewPass[]): Observable<NewPass[]>{
    return this.http.put<NewPass[]>(this._url+'/passwords', ({user: user}) )
  }




}
