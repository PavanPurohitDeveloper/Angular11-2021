import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public product = {
    Name: 'Iphone',
    Price: 45000,
    Description: 'A14 Bionic is the fastest chip in a smartphone.And it pushes what’s possible. Like crunching trillions',
    mfg: new Date(),
    Photo: 'assets/iPhone.jpg'
  };

  public selectedView = "info";

  //javascript object - obj
  public ChooseView(obj: any) {
    this.selectedView = obj.target.value;
  }

}
