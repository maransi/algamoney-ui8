import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CalendarModule, CheckboxModule, DataTableModule, DropdownModule, InputMaskModule  } from 'primeng/primeng';
import { InputTextareaModule, InputTextModule, SelectButtonModule, TabViewModule, TooltipModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from 'app/shared/shared.module';
import { PessoaService } from './pessoa.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    CheckboxModule,
    InputMaskModule,
    SharedModule,
    HttpModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ],
  exports: [
//    PessoaCadastroComponent,
//    PessoasPesquisaComponent
  ],
  providers: [PessoaService]
})
export class PessoasModule { }
