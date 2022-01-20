import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Lancamento } from 'app/domain/lancamento';
import { Observable } from 'rxjs/Observable';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos: Lancamento[];
  lancamentosObs: Observable<Lancamento[]>;

  totalRegistros = 0;

  filtro = new LancamentoFiltro();

  @ViewChild('tabela') grid;
  
  constructor( @Inject(LancamentoService) private lancamentoService,
                  @Inject(ToastyService) private toasty ){}

  ngOnInit(): void {
  }

  pesquisar( pagina = 0 ){

    this.filtro.pagina = pagina;

    this.lancamentosObs = this.lancamentoService
          .pesquisarLancamentoObs();


    this.lancamentoService
          .pesquisar( this.filtro )
          .then( resultado => {
            this.totalRegistros = resultado.total;
            this.lancamentos = resultado.lancamentos;
          });
  }

  aoMudarPagina( event : LazyLoadEvent ){
    const pagina = event.first / event.rows;

    this.pesquisar( pagina );
  }


  excluir( lancamento: any ){
    this.lancamentoService.excluir( lancamento.codigo )
      .then( () => {
        if ( this.grid.first === 0 ){
          this.pesquisar();
        }else{
          this.grid.first = 0;
        }

        this.toasty.success("Lançamento excluido com sucesso!!");
      });
  }

}
