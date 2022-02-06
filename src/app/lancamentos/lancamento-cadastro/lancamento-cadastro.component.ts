import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
                @Inject( LancamentoService ) private lancamentoService,
                @Inject( ActivatedRoute ) private route,
                @Inject( Router ) private router ) { }

  ngOnInit() {
//    console.log( this.route.snapshot.params['codigo'] );

    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento){
      this.carregarLancamento( codigoLancamento );
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }


  carregarLancamento( codigoLancamento: number){
    this.lancamentoService.buscarPorCodigo( codigoLancamento )
          .then( lancamento => this.lancamento = lancamento )
          .catch( erro => this.errorHandler.handle( erro ));
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

  salvar( form: FormControl ){
    if ( this.editando ){
      this.atualizarLancamento( form );
    }else {
      this.adicionarLancamento( form );
    }
  }

  atualizarLancamento( form: FormControl ){
    this.lancamentoService.atualizar( this.lancamento )
                  .then( lancamento => {
                    this.lancamento = lancamento;
                    this.toasty.success( "Lancamento alterado com sucesso!!!");
                  })
                  .catch( error => this.errorHandler.handle( error ));
  }


  adicionarLancamento( form: FormControl){
    this.lancamentoService.adicionar( this.lancamento )
                          .then( lancamentoAdicionado => { 
                                        this.toasty.success( "Lançamento adicionado com sucesso!!!"); 
/*
                                        form.reset();
                                        this.lancamento = new Lancamento();
*/
                                        this.router.navigate(["/lancamentos", lancamentoAdicionado.codigo ])
                                      })
                          .catch( erro => this.errorHandler.handle( erro ));

  }

  get editando(){
    return Boolean( this.lancamento.codigo );
  }

  novo( form: FormControl){
    form.reset();

    setTimeout( function(){
      this.lancamento = new Lancamento();
    }.bind(this),1);
  }

}
