import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {


  public products = ['Samsung TV', 'Mobile', 'Nike Shoes', 'Laptop'];

  //json data
  public data = [
    {
      category: "Electronics",
      products: ['Samsung TV', 'Mobile']
    },
    {
      category: "Shoes",
      products: ['Woodland', 'Nike', 'Lee cooper']
    },
    {
      category: "Fashion",
      products: ['Mens', 'Womens']
    }
  ]

  public Items = [
    { Id: 1, Name: 'Iphone', Price: 65000, Image: 'assets/iphone.jpg' },
    { Id: 2, Name: 'Oneplus', Price: 30000, Image: 'assets/oneplus.jpg' },
    { Id: 3, Name: 'Samsung', Price: 25000, Image: 'assets/samsung.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }




}
