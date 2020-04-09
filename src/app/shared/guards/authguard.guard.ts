import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('We are in auth guard');
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if (!isUserLoggedIn || isUserLoggedIn === 'false') {
      console.log('user trying to access the link directly');
      this.router.navigate(['/']);
      return false;
    }

    console.log('user is logged in')
    return true;
  }

}
