import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  //Inject the HttpClient class
  constructor(private _http: HttpClient) { }

  //HttpGet
  public getEmpData(): Observable<any> {

    //while reading the data suppose if you want to pass headers..additional information need to pass using HttpHeaders class.
    // Angular is expecting the data only in the form of JSON.
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json'); //append the additional details to httpHeaders.
    return this._http.get('http://localhost:3000/contacts')  //some mockdata or dummy data using Json server db.json file
  }

}
