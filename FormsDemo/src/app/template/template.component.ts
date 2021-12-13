import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  //Each property will have an input element on HTML template
  firstname: string = null;
  lastname: string = null;
  email: string = null;
  amount: string = null;
  gender: string = null;
  country: string = null;
  msg: string = null;


  Register(formvalue) {
    if (formvalue.valid) {
      this.msg = "Firstname: " + this.firstname + "<br>Lastname: " + this.lastname + "<br> Email: " + this.email + "<br> Amount: " + this.amount + "<br> Gender: " + this.gender + "<br> Country: " + this.country;
    }
    else {
      this.msg = "Invalid data";
    }
  }


}
