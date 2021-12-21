import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  //OnSubmit form data...we suppose to get some data from HTML i.e. data
  //Once you create a data, We have to insert the data to Server..we need to get the acknowledgement so use subscribe() method.. whatever response I am getting display it on the console.
  //post method will not return anything void.. GET only Observable.
  onSubmit(data) {
    this._http.post('http://localhost:3000/contacts', data).subscribe((posRes) => {
      console.warn(posRes);
    });
    //console.warn(data);
  }

}
