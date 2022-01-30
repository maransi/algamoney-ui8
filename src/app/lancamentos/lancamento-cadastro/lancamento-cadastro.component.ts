import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Lancamento } from 'app/core/model';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { ToastyService } from 'ng2-toasty';
import { CategoriaService } from '../categoria/categoria.service';
import { LancamentoService } from '../lancamento.service';

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

  lancamento = new Lancamento();

  constructor( @Inject( CategoriaService) private categoriaService,
                @Inject(PessoaService) private pessoaService,
                @Inject( ErrorHandlerService) private errorHandler,
                @Inject( ToastyService ) private toasty,
                @Inject( LancamentoService ) private lancamentoService) { }

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

  salvar( form: FormControl){
    this.lancamentoService.adicionar( this.lancamento )
                          .then( () => { 
                                        this.toasty.success( "Lançamento adicionado com sucesso!!!"); 
                                      })
                          .catch( erro => this.errorHandler.handle( erro ));

    form.reset();

    this.lancamento = new Lancamento();
  }

}
