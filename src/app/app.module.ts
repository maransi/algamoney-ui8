import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    ClienteFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    TooltipModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
