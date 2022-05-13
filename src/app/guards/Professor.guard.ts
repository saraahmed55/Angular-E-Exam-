import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

 @Injectable({providedIn:'root'})

export class ProfessorGuard implements CanActivate{
  constructor(
    private router:Router
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    const email = !!localStorage.getItem('email');
    const role = !!localStorage.getItem('role_name');
    if(email && role){
      var rolename = localStorage.getItem('role_name');
      if(rolename != null){
        if(rolename.toLowerCase() == 'admin' || rolename.toLowerCase() == 'professor'){
          return true
        }
      }
    }
    localStorage.clear();
    this.router.navigate(['']).then(x=>{window.location.reload()});
      return false
  }
}
