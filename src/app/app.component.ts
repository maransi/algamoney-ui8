import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private toastyConfig: ToastyConfig,
              @Inject( Router ) private router ){
    this.toastyConfig.theme = "bootstrap";
  }

  exibindoNavbar(): Boolean{
    return this.router.url !== "/login";
  }


}
