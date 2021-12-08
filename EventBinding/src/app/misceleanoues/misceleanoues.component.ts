import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misceleanoues',
  templateUrl: './misceleanoues.component.html',
  styleUrls: ['./misceleanoues.component.css']
})
export class MisceleanouesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public msg;
  public status;
  public uname;
  public styleObj = {
    'border-style': 'solid',
    'border-color': 'black',
    'border-width': '1px'
  };

  ShowMsg() {
    this.msg = "Name in Block Letters";
  }

  ChangeCase() {
    if (this.uname == '') {
      this.msg = 'Username required';
      this.styleObj = {
        'border-style': 'solid',
        'border-color': 'red',
        'border-width': '2px'
      };
    } else {
      this.uname = this.uname.toUpperCase();
      this.styleObj = {
        'border-style': 'solid',
        'border-color': 'green',
        'border-width': '2px'
      };
      this.msg
    }
  }

  public OnCut() {
    this.status = "Removed-Copied on Clipboard";
  }

  public OnCopy() {
    this.status = "Copied on Clipboard";
  }

  public OnPaste() {
    this.status = "Inserted from on Clipboard";
  }

  ViewLarge() {
    window.open('assets/iphone.jpg', 'width=600 height=500');
  }

}
