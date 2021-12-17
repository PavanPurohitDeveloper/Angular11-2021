import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //Every child component property, whatever property you want to retrieve the data from the parent component that must be decorated with @Input()
  @Input() PID: string; //Product ID
  @Input() PName: string; //Product Name
  @Input() Cost: string;

  //EventEmitter is a class.. custom event
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  //emit is a method
  ClickMe() {
    // this.sendData.emit("Welcome");
    this.sendData.emit(this.PID + "---" + this.PName + "---" + this.Cost);
  }

}
