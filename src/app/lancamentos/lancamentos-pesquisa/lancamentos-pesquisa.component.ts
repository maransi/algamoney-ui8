import { Component, Inject, OnInit } from '@angular/core';
import { Lancamento } from 'app/domain/lancamento';
import { Observable } from 'rxjs/Observable';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos: Lancamento[];
  lancamentosObs: Observable<Lancamento[]>;
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;

  constructor( @Inject(LancamentoService) private lancamentoService){}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    };


    this.lancamentosObs = this.lancamentoService
          .pesquisarLancamentoObs();


    this.lancamentoService
          .pesquisar( filtro )
          .then( lancamentos => this.lancamentos = lancamentos );

  }


}
