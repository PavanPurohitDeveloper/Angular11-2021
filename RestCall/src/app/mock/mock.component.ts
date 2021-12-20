import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {

  //Inject that Mock service
  constructor(private _serv: MockService) { }

  //whenever page is loaded, I just want to get that particular data.. so create a varibale
  public employees: any;

  //ngOnInit - whenever page is loaded, I just want to get that particular data..
  //subscribe - It is observing the data from the server and that we suppose to subscribe that in the component.. so that It contains two call back functions - first one is for success...second one is for error.
  ngOnInit(): void {

    this._serv.getEmpData().subscribe((posRes) => {  //success response
      this.employees = posRes
    }, (errRes) => {  //error response
      console.log(errRes);
    })

  }

}
