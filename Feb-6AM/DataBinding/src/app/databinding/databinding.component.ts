import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  public product = {
    Name: 'Iphone',
    Price: 45000,
    Qty: 3,
    mfd: new Date('2021/01/20'),
    InStock: true,
    Url: 'https://flipkart.com'
  }

}
