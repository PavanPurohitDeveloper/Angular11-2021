import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  //get the username and password from DB
  isLoggedIn: boolean = false;

  constructor() { }

}
