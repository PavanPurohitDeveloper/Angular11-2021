import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isVisible: boolean = false;
  public btnText = 'Show';

  public product = {

    Name: 'Iphone',
    Price: 45000,
    Photo: 'assets/iphone.jpg'
  }

  public DisplayClick() {

    this.isVisible = (this.isVisible == false) ? true : false;
    this.btnText = (this.btnText == 'Show') ? 'Hide' : 'Show';
  }

}
