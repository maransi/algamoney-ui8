import { Component, Inject, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaFiltro, PessoaService } from '../pessoa.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas: Pessoa[] ;

  totalRegistros = 0;

  filtro = new PessoaFiltro();

  constructor(@Inject( PessoaService ) private pessoaService,
              @Inject( Title ) private title) { }

  ngOnInit() {
    this.title.setTitle("Pesquisa de Pessoas");
  }

  pesquisar( pagina = 0 ){
    this.filtro.pagina = pagina;

    this.pessoaService
          .pesquisar( this.filtro )
          .then( resultado => {
            this.totalRegistros = resultado.total;
            this.pessoas = resultado.pessoas;
          });
  }

  aoMudarPagina( event: LazyLoadEvent ){
    const pagina = event.first / event.rows;

    this.pesquisar( pagina );
  }
}

