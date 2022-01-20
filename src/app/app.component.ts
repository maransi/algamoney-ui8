import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: String = 'Marco Antonio';
  dataAniversario: Date = new Date(1966, 10, 17);
  preco: Number = 123456.66;
  troco: Number= 105500.01;

  constructor( private toastyConfig: ToastyConfig ){
    this.toastyConfig.theme = "bootstrap";
  }

}
