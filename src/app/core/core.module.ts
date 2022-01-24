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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfirmDialogModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    NavbarComponent
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
              {provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class CoreModule { }
