import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  //I have two properties
  public var_one: string;
  public var_two: string;

  //Initializing the values for these properties..this data I want to display in One.componet.html by using <h1> tag.. In one component only I am trying to display data
  //This data I want to access in second component..by using decorator @ViewChild
  constructor() {
    this.var_one = "Hello_1";
    this.var_two = "Hello_2";
  }

  ngOnInit(): void {
  }

}
