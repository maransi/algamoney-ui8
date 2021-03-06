import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ErrorHandlerService } from './error-handler.service';
// import { ConfirmDialogModule } from 'primeng/primeng';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService, ConfirmDialogModule } from 'primeng/primeng';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { LancamentoService } from 'app/lancamentos/lancamento.service';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'app/seguranca/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
              LancamentoService,
              PessoaService,
              ConfirmationService,
              ErrorHandlerService,
              {provide: LOCALE_ID, useValue: 'pt-BR'},
              Title,
              AuthService,
              JwtHelper
            ]
})
export class CoreModule { }
