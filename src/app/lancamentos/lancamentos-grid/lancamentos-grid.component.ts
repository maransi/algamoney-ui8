import { Component, Input, OnInit } from '@angular/core';
import { LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent implements OnInit {

  @Input() lancamentos = [];

  @Input() filtro: LancamentoFiltro;

  constructor() { }

  ngOnInit() {
  }


}
