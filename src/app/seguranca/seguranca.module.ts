import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonModule, InputTextModule, PanelModule, PasswordModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class SegurancaModule { }
