import { Component, Inject, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
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

  pessoas = [  { label: 'Selecione', value: 0},
              { label: 'Marco Antonio', value: 1},
              { label: 'Catia Louse', value: 2 },
              { label: 'Gustavo Rocha', value: 3},
              { label: 'Jose Silva', value: 4},
              { label: 'João Silva', value: 5 },
              { label: 'Maria Jose', value: 6 },
              { label: 'Lucia Marins', value: 7 },
              { label: 'Mariana Fontes', value: 8 },
              { label: 'Carlos Eduardo', value: 9 }
          ];

  constructor( @Inject( CategoriaService) private categoriaService,
                @Inject( ErrorHandlerService) private errorHandler) { }

  ngOnInit() {
    this.carregarCategorias();
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
                          .then(categorias => {
                                                this.categorias = categorias.map(c => ({ label: c.nome, value: c.codigo }));
                          })
                          .catch(erro => this.errorHandler.handle(erro));


  }



}
