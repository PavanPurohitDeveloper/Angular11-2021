import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent {

  msg: string = "";
  //group of controls are represented as "FormGroup"
  myform: FormGroup;

  constructor() {
    //FormGroup which is used to group all the input elements
    this.myform = new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]*$")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]*$")]),
      email: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      gender: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }

  Register() {
    if (this.myform.valid) {
      this.msg = "First Name: " + this.myform.controls.firstname.value + "<br>Last Name: " + this.myform.controls.lastname.value + "<br>Email: " + this.myform.controls.email.value + "<br>Amount: " + this.myform.controls.amount.value + "<br>Gender: " + this.myform.controls.gender.value + "<br> Country: " + this.myform.controls.country.value;
    } else {
      this.msg = "Invalid data";
    }
  }


}
