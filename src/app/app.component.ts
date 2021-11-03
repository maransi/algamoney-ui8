import { Component } from '@angular/core';

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

}
