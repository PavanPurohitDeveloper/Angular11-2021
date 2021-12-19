import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  //static methods
  public mySqlData(): string {
    return "Sql Data will come here";
  }

  public MongoData(): string {
    return "Mongo DB Data comes here";
  }

  constructor() { }

}
