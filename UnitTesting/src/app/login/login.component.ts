import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = null;
  password:string = null;
  msg:string = null;

  CheckLogin(){
    if(this.username == "admin" && this.password == "admin"){
      this.msg = "Login Success";
    }else{
      this.msg = "Invalid Credentials";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
