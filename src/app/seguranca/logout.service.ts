import { Inject, Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class LogoutService {
  tokensRenokeUrl = "http://localhost:8080/tokens/revoke"

  constructor( @Inject( AuthHttp ) private http,
              @Inject( AuthService ) private auth) { }

  logout(){
    return this.http.delete( this.tokensRenokeUrl, { withCredentials: true })
                .toPromise()
                .then( () => {
                  this.auth.limparAccessToken();
                });
  }

}
