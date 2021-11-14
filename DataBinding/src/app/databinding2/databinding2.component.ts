import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css']
})
export class Databinding2Component implements OnInit {

  public Name = "IPhone"; //these are default values
  public Price = 45874;
  public ShippingInfo = "Hyderabad";
  public IsInStock = true;

  constructor() { }

  ngOnInit(): void {
  }

}
