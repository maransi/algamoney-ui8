import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/seguranca/auth.service';
import { LogoutService } from 'app/seguranca/logout.service';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject( AuthService ) private auth,
                @Inject( LogoutService ) private logoutService,
                @Inject( ErrorHandlerService ) private errorHandler,
                @Inject( Router ) private router ) { }

  ngOnInit() {
  }

  criarNovoAccessToken(){
    this.auth.obterNovoAccessToken();
  }

  logout(){
    this.logoutService.logout()
        .then( () => {
          this.router.navigate(["/login"]);
        })
        .catch( erro => this.errorHandler.handle( erro ));
  }

}
