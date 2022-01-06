import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusService } from './login-status.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService implements CanActivate {

  //Inject the services
  constructor(private logisStatusService: LoginStatusService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (this.logisStatusService.isLoggedIn == false) {
      alert("You must login to access Electronics Page");
      this.router.navigateByUrl('/'); //'/' always go to Home page
    }
    return this.logisStatusService.isLoggedIn;
  }


}
