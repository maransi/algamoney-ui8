import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( @Inject( AuthService ) private auth,
              @Inject( Router ) private router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if( next.data.roles && !this.auth.temQualquerPermissao( next.data.roles )){
      this.router.navigate(['/nao-autorizado']);

      return false;
    }
    
    return true;
  }
}
