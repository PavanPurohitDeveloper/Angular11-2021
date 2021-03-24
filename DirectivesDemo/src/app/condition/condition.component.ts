import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  public products = [
    { Name: 'Nike Casuals', Price: 3500, Category: 'Shoes' },
    { Name: 'Iphone', Price: 6500, Category: 'Electronics' }
  ];

  public filter = 'Electronics';

  constructor() { }

  ngOnInit(): void {
  }

}
