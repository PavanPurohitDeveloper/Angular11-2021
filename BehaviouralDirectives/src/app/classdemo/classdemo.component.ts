import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classdemo',
  templateUrl: './classdemo.component.html',
  styleUrls: ['./classdemo.component.css']
})
export class ClassdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //By using these properties I want to apply styles to HTML element.
  public effects;
  public isBackEffectSelected;
  public isTextEffectSelected;
  public isBorderEffectSelected;

}
