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
import {CalendarModule, CheckboxModule, ConfirmationService, ConfirmDialogModule, DataTableModule, DropdownModule, SelectButtonModule} from 'primeng/primeng';
import { InputMaskModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { SharedModule } from './shared/shared.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { LancamentoService } from './lancamentos/lancamento.service';
// import { ToastyModule } from 'ng2-toasty';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    CampoColoridoDirective,
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
    InputMaskModule,
    LancamentosModule,
    SharedModule,
    PessoasModule,
    CoreModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
