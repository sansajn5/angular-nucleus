import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private jwtService: JwtHelperService,
    private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const token = localStorage.getItem('token');
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('user') &&
      !this.jwtService.isTokenExpired(token)
    ) {
      return true;
    }

    if (
      localStorage.getItem('token') &&
      localStorage.getItem('user') &&
      this.jwtService.isTokenExpired(token)
    ) {
      this.authService.logout();
      this.router.navigate(['auth/sign-in']);
      return false;
    }

    this.router.navigate(['auth/sign-in']);
    return false;
  }
}
