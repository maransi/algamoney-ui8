import { Component, Inject, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [{label: 'Receita', value: 'RECEITA' },
            {label: 'Despesa', value: 'DESPESA'}];

  categorias = [];

  pessoas = [];

  constructor( @Inject( CategoriaService) private categoriaService,
                @Inject(PessoaService) private pessoaService,
                @Inject( ErrorHandlerService) private errorHandler) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
                          .then(categorias => {
                                                this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo }));
                          })
                          .catch(erro => this.errorHandler.handle(erro));


  }


  carregarPessoas(){
    this.pessoaService.listarTodas()
        .then( 
          pessoas => {
            this.pessoas = pessoas.map( p => ({ label: p.nome, value: p.codigo}));
          }
        )
        .catch( erro => this.errorHandler.handle(erro));
  }

}
