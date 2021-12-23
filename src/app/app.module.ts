import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
import {CalendarModule, CheckboxModule, DataTableModule, DropdownModule,SelectButtonModule, SharedModule} from 'primeng/primeng';
import { InputMaskModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component'

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    ClienteFormComponent,
    CampoColoridoDirective,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    MessageComponent,
    LancamentosGridComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    CheckboxModule,
    InputMaskModule

  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
