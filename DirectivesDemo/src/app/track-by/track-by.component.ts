import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent {

  //It contains 2 records
  public product = [
    { Id: 1, Name: 'Iphone', Price: 65478, Image: 'assets/iphone.jpg' },
    { Id: 2, Name: 'OnePlus', Price: 52145, Image: 'assets/oneplus.jpg' }
  ];

  public AddProduct() {

    //adding a new item with existing products.. now contains 3 records
    this.product = [
      { Id: 1, Name: 'Iphone', Price: 65478, Image: 'assets/iphone.jpg' },
      { Id: 2, Name: 'OnePlus', Price: 52145, Image: 'assets/oneplus.jpg' },
      { Id: 3, Name: 'Samsung', Price: 123456, Image: 'assets/samsung.jpg' }
    ];
  }

  //function
  public TrackById(index: number, product: any) {
    return product.Id;
  }

}
