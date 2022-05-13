import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
 @Injectable({providedIn:'root'})
export class AdminGuard implements CanActivate{
  constructor(
    private router:Router
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    const email = !!localStorage.getItem('email');
    const role = !!localStorage.getItem('role_name');
    if(email && role){
      var rolename = localStorage.getItem('role_name');
      if(rolename != null){
        if(rolename.toLowerCase() == 'admin'){
          return true
        }
      }
    }
    localStorage.clear();
    this.router.navigate(['']).then(x=>{window.location.reload()});
      return false
  }
}
