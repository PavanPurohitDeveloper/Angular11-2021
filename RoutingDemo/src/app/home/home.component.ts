import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //properties
  firstName: string = null;
  lastName: string = null;
  canNavigate: boolean = true;

  onFirstNameChange() {
    this.canNavigate = false;
  }

  onLastNameChange() {
    this.canNavigate = false;
  }

  onSave() {
    this.canNavigate = true;
    alert('Saved');
  }
}
