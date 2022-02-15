import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Lancamento } from 'app/domain/lancamento';
import { URLSearchParams} from '@angular/http';
import * as moment from 'moment';
import { Pessoa } from 'app/core/model';
import { AuthHttp } from 'angular2-jwt';

export class PessoaFiltro{
  nome: string;

  pagina = 0;
  itensPorPagina = 5;
}


@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas';

  constructor( private http: AuthHttp) { }

  pesquisar( filtro: PessoaFiltro ): Promise<any>{


    const params = new URLSearchParams();

    params.set("page", filtro.pagina.toString() );
    params.set("size", filtro.itensPorPagina.toString());

    if ( filtro.nome ){
      params.set("nome", filtro.nome );
    }

    return this.http.get(`${this.pessoaUrl}?resumo`, { search: params  })        // Pode ser passado somente { headers }
            .toPromise()
            .then( response => {
                            const responseJson = response.json();
                            const pessoas = responseJson.content;

                            const resultado = {
                                pessoas,
                                total: responseJson.totalElements
                            };

                            return resultado;
                    });
  }

  listarTodas(): Promise<any>{
    return this.http.get(this.pessoaUrl)
              .toPromise()
              .then( response => {
                                    const responseJson = response.json()
                                    const pessoas = responseJson.content;

                                    return pessoas;
              });
  }

  adicionar( pessoa: Pessoa ): Promise<Pessoa>{
    return this.http.post(this.pessoaUrl, JSON.stringify( pessoa ) )
              .toPromise()
              .then( response => response.json() );

  }


}
