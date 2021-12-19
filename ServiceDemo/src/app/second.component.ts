import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  providers: [DbService]
})
export class SecondComponent implements OnInit {

  public sqlData: string;

  //Inject the DB Service inside Constructor
  constructor(private _serv: DbService) { }

  //ngOnInit() == whenever this component is loaded generally it is something like on-load event. Whenever this is getting loaded, component is loaded, then this method will get automatically invoked.
  ngOnInit() {
    this.sqlData = this._serv.mySqlData();
  }
}
