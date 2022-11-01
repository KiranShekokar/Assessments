import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private routerObj:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(sessionStorage.getItem("AUTH_TOKEN")!=null){
      return true;
    }
    else{
      this.routerObj.navigate(["/login"], {queryParams : {"returnUrl":state.url}});
      return false;
    }
    
    
  }
}
