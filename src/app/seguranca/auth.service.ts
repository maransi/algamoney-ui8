import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(@Inject( Http ) private http,
              @Inject( JwtHelper ) private jwtHelper) { 
    this.carregarToken();
  }

  login( usuario: string, senha: string): Promise<void>{
    const headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
          .toPromise()
          .then(response => {
//            console.log(response);
            this.armazenarToken( response.json().access_token );
          })
          .catch(response => {
//            console.log(response);
            if ( response.status === 400 ){
              const responseJson = response.json();

              if  (responseJson.error === "invalid_grant"){
                return Promise.reject("Usuário ou senha inválida!!!");
              }
              
              return Promise.reject( response );
            }
          });

  }

  private armazenarToken( token: string ){
    this.jwtPayload = this.jwtHelper.decodeToken( token );

    localStorage.setItem( "token", token );
  }

  private carregarToken(){
    const token = localStorage.getItem("token");

    if (token){
      this.armazenarToken( token );
    }
  }

}
