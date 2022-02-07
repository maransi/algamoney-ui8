import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Lancamento } from 'app/domain/lancamento';
import { Observable } from 'rxjs/Observable';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

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
                  @Inject(ToastyService) private toasty,
                  @Inject(ConfirmationService) private confirmationService,
                  @Inject( ErrorHandlerService ) private errorHandler,
                  @Inject( Title ) private title ){}

  ngOnInit(): void {
    this.title.setTitle("Pesquisa de Lançamentos");
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
          })
          .catch( erro => this.errorHandler.handle( erro ));
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
      })
      .catch( erro => { this.toasty.error(this.errorHandler.handle( erro ) ) } );

//      .catch( erro => this.errorHandler(erro) );
  }

  confirmarExclusao( lancamento: any ){
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir?",
      accept: () => {
        this.excluir( lancamento );
      }
    });
  }

}
