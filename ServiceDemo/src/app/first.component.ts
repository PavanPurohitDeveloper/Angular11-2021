import { Component } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  providers: [DbService] //providers is the plural name
})
export class FirstComponent {

  public sqlData: string;
  public mongoData: string;

  //Depedency Injection.. Injecting the Service inside Contructor.
  constructor(private _serv: DbService) {
    this.sqlData = _serv.mySqlData();
    this.mongoData = _serv.MongoData();
  }
}
