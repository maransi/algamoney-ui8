import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('corFundo')
  cor: String; // = 'gray';

  @HostBinding('style.background-color')
  corDeFundo: String;

  @HostListener('focus')
  onNomeFocus() {
      this.corDeFundo = this.cor;
  }

  @HostListener('blur')
  onNomeBlur() {
      this.corDeFundo = 'transparent';
  }
}
