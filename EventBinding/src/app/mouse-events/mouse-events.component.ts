import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public ad = "assets/iphone.jpg";

  public ShowAd1() {
    this.ad = "assets/oneplus.jpg";
  }

  public ShowAd2() {
    this.ad = "assets/samsung.jpg";
  }

  StartAnimation(e) {
    e.target.start();
  }

  StopAnimation(e) {
    e.target.stop();
  }

}
