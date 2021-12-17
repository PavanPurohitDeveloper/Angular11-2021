import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  //This data I need to populate in Child components HTML
  public products: Array<any> = [
    //we can give any name pID
    { pID: 101, pName: 'Mobile', Cost: 10000 },
    { pID: 102, pName: 'Laptop', Cost: 20000 },
    { pID: 103, pName: 'Desktop', Cost: 30000 },
    { pID: 104, pName: 'Tablet', Cost: 15000 }
  ];

  myFun(data): any {
    alert(data);
  }

}
