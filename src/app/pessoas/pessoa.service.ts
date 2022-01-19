import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Lancamento } from 'app/domain/lancamento';
import { URLSearchParams} from '@angular/http';
import * as moment from 'moment';

export class PessoaFiltro{
  nome: string;

  pagina = 0;
  itensPorPagina = 5;
}


@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas';

  constructor( private http: Http) { }

  pesquisar( filtro: PessoaFiltro ): Promise<any>{

    const headers: Headers = new Headers();

    const params = new URLSearchParams();

    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");

    params.set("page", filtro.pagina.toString() );
    params.set("size", filtro.itensPorPagina.toString());

    if ( filtro.nome ){
      params.set("nome", filtro.nome );
    }

    return this.http.get(`${this.pessoaUrl}?resumo`, { headers: headers, search: params  })        // Pode ser passado somente { headers }
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

}
