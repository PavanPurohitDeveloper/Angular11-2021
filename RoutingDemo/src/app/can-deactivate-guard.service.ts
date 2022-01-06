import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponenDeactivate } from './can-componen-deactivate';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponenDeactivate> {
  //CanDeactivate is generic type

  constructor() { }

  //implements/contains on emethod..
  canDeactivate(component: CanComponenDeactivate): boolean {

    if (component.canNavigate == true) {
      return true;
    }
    else {
      if (confirm("Do you want to Discard Changes?")) {
        return true;
      } else {
        return false;
      }
    }
  }
}
