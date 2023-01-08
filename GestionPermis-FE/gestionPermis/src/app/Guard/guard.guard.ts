import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class GuardGuard implements CanActivate {
  private JwtHelper!:JwtHelperService
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>{
    const token = localStorage.getItem("jwt");
    if (token){
      
      return of(true)
    }
    else{
      localStorage.removeItem('jwt')
      return of(false);
    }
  }
}
