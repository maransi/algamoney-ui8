import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas: any[] ;

  constructor() { }

  ngOnInit() {
    this.pessoas = [
        {nome: 'MARCO ANTONIO DA SILVA', cidade: 'SAO PAULO', estado: 'SP', status: 'ATIVO' },
        {nome: 'CATIA LOUISE F R SILVA', cidade: 'MURITIBA', estado: 'BAHIA', status: 'ATIVO'},
        {nome: 'GUSTAVO ROCHA DA SILVA', cidade: 'SAO PAULO', estado: 'SP', status: 'ATIVO'},
        {nome: 'JOSE DA SILVA', cidade: 'RECIFE', estado: 'PB', status: 'INATIVO'},
        {nome: 'JOAO DA SILVA', cidade: 'PORTO SEGURO', estado: 'BA', status: 'INATIVO'},
        {nome: 'MARIA DA SILVA', cidade: 'BELO HORIZONTE', estado: 'MG', status: 'ATIVO'},
        {nome: 'MARIA JOSE GUIMARAES', cidade: 'PORTO ALEGRE', estado: 'RS', status: 'INATIVO'},
    ]



  }
}
