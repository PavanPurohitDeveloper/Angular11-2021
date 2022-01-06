import { Component, OnInit } from '@angular/core';
import { LoginStatusService } from '../login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  message: string = "";
  loginStatus: boolean;

  constructor(private loginStatusService: LoginStatusService) {

    //get the value
    this.loginStatus = this.loginStatusService.isLoggedIn;
  }

  CheckLogin(t1) {
    if (this.username == "admin" && this.password == "admin") {
      this.message = "Login Success";
      this.loginStatusService.isLoggedIn = true;
      this.loginStatus = true;
    } else {
      this.message = "Login Failed";
      this.loginStatusService.isLoggedIn = false;
      this.loginStatus = false;
      t1.focus();
    }
  }

  Logout() {
    this.loginStatusService.isLoggedIn = false;
    this.loginStatus = false;
  }


}
