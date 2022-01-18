import { Component, Inject, OnInit } from '@angular/core';
import { Lancamento } from 'app/domain/lancamento';
import { Observable } from 'rxjs/Observable';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos: Lancamento[];
  lancamentosObs: Observable<Lancamento[]>;
  
  constructor( @Inject(LancamentoService) private lancamentoService){}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    this.lancamentosObs = this.lancamentoService
          .pesquisarLancamentoObs();


    this.lancamentoService
          .pesquisar()
          .then( lancamentos => this.lancamentos = lancamentos );

  }


}
