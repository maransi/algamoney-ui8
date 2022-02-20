import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonModule, InputTextModule, PanelModule, PasswordModule } from 'primeng/primeng';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { MoneyHttp } from './money-http';

export function authHttpServiceFactory( auth: AuthService, http: Http, options: RequestOptions ){
  const config = new AuthConfig({
    globalHeaders: [{ 'Content-Type': 'application/json'}]
  })

  return new MoneyHttp( auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ AuthService, Http, RequestOptions ]
    }
  ]
})
export class SegurancaModule { }
