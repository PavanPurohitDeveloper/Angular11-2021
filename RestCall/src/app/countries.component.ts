import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  //Data is available in Service and now we have to make data available in Component..Inject Service..
  constructor(private _serv: CountriesService) { }

  //result of any type..result variable contains data
  public result: any;

  //we suppose to make a request to this particular method getCountries() and retrieve the whatever data it is going to share with..
  //This method return type is "Observable". Whatever we are Observing by communicating with the Server, That has to subscribe in the Component
  //Whevever my page is loaded Or Component loaded I wanted to get it over here.
  //subscribe() method will contain 2 call back function - first one is "Success" and second one is going to be for "failure"
  ngOnInit() {
    this._serv.getCountries().subscribe((posRes) => {
      this.result = posRes;
    }, (errRes: HttpErrorResponse) => { //we dont know what kind of error is going to be.. By using "HttpErrorResponse" type, will come to know its going to be Client Error Or Server Error
      if (errRes.error instanceof Error) {  //Error class
        console.log('Client Error');
      } else {
        console.log('Server Error');
      }
    })
  }
}
