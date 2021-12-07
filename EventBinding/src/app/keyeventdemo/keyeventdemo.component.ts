import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyeventdemo',
  templateUrl: './keyeventdemo.component.html',
  styleUrls: ['./keyeventdemo.component.css']
})
export class KeyeventdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public userList = [
    { userName: 'john' },
    { userName: 'srikanth' },
    { userName: 'diyansh' },
    { userName: 'david' }
  ];

  public userName;
  public msg;
  public warn;
  public pwd;
  public regExp = /(?=.*[A-Z]\w{4,15})/;
  public pwdStrength = '';
  public min;
  public max;
  public low;
  public high;
  public val;

  public strengthMeter(min, max, val, low, high) {
    this.min = min;
    this.max = max;
    this.low = low;
    this.high = high;
    this.val = val;
  }

  //for every keystorke this function gets executed
  VerifyUser() {
    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].userName == this.userName) {
        this.msg = "Username has already taken - try another";
        break;
      } else {
        this.msg = 'Username avaible';
      }
    }
  }

  VerifyPassword() {
    //match() property/function is to match the regular expression
    if (this.pwd.match(this.regExp)) {
      this.pwdStrength = "Strong Password";
      this.strengthMeter(1, 100, 100, 0, 0);

    } else if (this.pwd.length < 4) {
      this.pwdStrength = "Poor Password";
      this.strengthMeter(1, 100, 100, 60, 80);

    } else {
      this.pwdStrength = "Weak Password";
      this.strengthMeter(1, 200, 200, 40, 80);
    }
  }

  VerifyCaps(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      this.warn = "Warning! Capslock on";
    } else {
      this.warn = "";
    }
  }

}
