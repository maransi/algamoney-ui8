import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(@Inject( AuthService ) private auth,
              @Inject( ErrorHandlerService ) private errorHandler,
              @Inject( Router ) private router  ) { }

  ngOnInit() {
  }

  login( usuario: string, senha: string){
    this.auth.login( usuario, senha )
      .then( () => {
        this.router.navigate(["/lancamentos"]);
      })
      .catch( erro => {
        this.errorHandler.handle( erro );
      });
  }

}
