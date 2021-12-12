import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city: string = "Hyderabad";
  salary: number = 7585478;
  n: number = 0.72;
  //json object
  person: object = { firstname: 'Sri', lastname: 'Kanth' };
  dt: Date = new Date();
  videoduration: number = 150; //150

}
