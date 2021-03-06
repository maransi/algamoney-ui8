import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
import {CalendarModule, CheckboxModule, DataTableModule, DropdownModule, SelectButtonModule} from 'primeng/primeng';
import { InputMaskModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppModule } from 'app/app.module';
import { SharedModule } from 'app/shared/shared.module';
import { LancamentoService } from './lancamento.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './categoria/categoria.service';
import { RouterModule } from '@angular/router';
import { LancamentosRoutingModule } from './lancamentos-routing.module';

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
    HttpModule,
    HttpClientModule,
//    RouterModule,
    LancamentosRoutingModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
  ],
  providers: [LancamentoService, CategoriaService]
})
export class LancamentosModule { }
