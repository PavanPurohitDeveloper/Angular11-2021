import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //I want to apply these two effects for HTML element
  public styleObject;
  public foreColor = 'black';
  public alignment = 'left';

  //It will be returning styleObject
  ApplyEffects() {
    //styleObject data
    this.styleObject = {
      'color': this.foreColor,
      'text-align': this.alignment
    };
    return this.styleObject;
  }

}
