import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //Inject the HttpClient class by using the constructor..
  //HttpClient contains GET, post, put methods etc.
  constructor(private _http: HttpClient) { }

  //Communicating with server and retrieve the data..return type is Observable type.
  //we suppose to make a request to this particular method getCountries() and retrieve the whatever data it is going to share with..
  //This method return type is "Observable". Whatever we are Observing by communicating with the Server, That has to subscribe in the Component.
  public getCountries(): Observable<any> {
    return this._http.get('https://restcountries.com/v2/all');  //http://restcountries.eu/rest/v2/all
  }

}

