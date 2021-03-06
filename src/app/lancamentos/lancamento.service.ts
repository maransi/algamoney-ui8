import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Lancamento } from 'app/domain/lancamento';
import {Lancamento} from './../core/model';
import { URLSearchParams} from '@angular/http';
import * as moment from 'moment';
import { AuthHttp } from 'angular2-jwt';

export class LancamentoFiltro{
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;

  pagina = 0;
  itensPorPagina = 5;
}


@Injectable()
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor( private http: AuthHttp,
                private httpClient: HttpClient) { }

  pesquisarLancamentoObs(): Observable<Lancamento[]>{
    return this.httpClient.get<Lancamento[]>(`${this.lancamentoUrl}?resumo`,
                                      { headers: new HttpHeaders()
                                                .set("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==")
                                      });
  }

  pesquisar( filtro: LancamentoFiltro ): Promise<any>{

//    const headers: Headers = new Headers();

    const params = new URLSearchParams();

//    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
//    headers.append("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjQ0NDQ1MDcxLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9DQVRFR09SSUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX1JFTU9WRVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUEVTUVVJU0FSX0xBTkNBTUVOVE8iLCJST0xFX1JFTU9WRVJfTEFOQ0FNRU5UTyIsIlJPTEVfQ0FEQVNUUkFSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0NBVEVHT1JJQSJdLCJqdGkiOiI3ZjYwZDE4My0yYmJjLTQ3ZTctOGMwYi05MjI3MGJjOGFmNGMiLCJjbGllbnRfaWQiOiJhbmd1bGFyIn0.N6oIMnpLwxGkkDqVU-HDJuFzfUv-ysSfG-K1DkSRhQY");

    params.set("page", filtro.pagina.toString() );
    params.set("size", filtro.itensPorPagina.toString());

    if ( filtro.descricao ){
      params.set("descricao", filtro.descricao );
    }

    if ( filtro.dataVencimentoInicio ){
      params.set("dataVencimentoDe", moment(filtro.dataVencimentoInicio).format("YYYY-MM-DD") );
    }

    if ( filtro.dataVencimentoFim ){
      params.set("dataVencimentoAte", moment(filtro.dataVencimentoFim).format("YYYY-MM-DD") );
    }


//    return this.http.get(`${this.lancamentoUrl}?resumo`, { headers: headers, search: params  })        // Pode ser passado somente { headers }
    return this.http.get(`${this.lancamentoUrl}?resumo`, { search: params  })        
            .toPromise()
            .then( response => {
                            const responseJson = response.json();
                            const lancamentos = responseJson.content;

                            const resultado = {
                                lancamentos,
                                total: responseJson.totalElements
                            };

                            return resultado;
                    });

//            .then( response => response.json().content );

  }


  excluir( codigo: number): Promise<void>{
//    const headers = new Headers();

//    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");

// return this.http.delete(`${this.lancamentoUrl}/${codigo}`, { headers: headers })
    return this.http.delete(`${this.lancamentoUrl}/${codigo}`)
      .toPromise()
      .then( () => null );
  }

  adicionar( lancamento: Lancamento): Promise<Lancamento>{
//    const headers = new Headers();

//    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
//    headers.append("Content-Type", "application/json");

    return this.http.post( `${this.lancamentoUrl}`,
                            JSON.stringify( lancamento ) )
//                            { headers })
                    .toPromise()
                    .then( response => response.json() );
  }

  atualizar(lancamento: Lancamento) : Promise<Lancamento>{
//    const headers = new Headers();

//    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
//    headers.append("Content-Type", "application/json");

    return this.http.put( `${this.lancamentoUrl}/${lancamento.codigo}`, 
                          JSON.stringify( lancamento)) 
//                          {headers})
                      .toPromise()
                      .then( response => {
                          const lancamentoAlterado = response.json() as Lancamento;

                          this.converterStringsParaDatas([lancamentoAlterado]);

                          return lancamentoAlterado;
                      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento>{
//    const headers = new Headers();

//    headers.append("Authorization", "Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");
//    headers.append("Content-Type","application/json");

// return this.http.get( `${this.lancamentoUrl}/${codigo}`,{ headers } )
      return this.http.get( `${this.lancamentoUrl}/${codigo}` )
      .toPromise()
              .then( response => {
                const lancamento = response.json() as Lancamento;

                this.converterStringsParaDatas( [lancamento]);

                return lancamento;
              });
  }


  converterStringsParaDatas( lancamentos: Lancamento[] ){
    for (const lancamento of lancamentos ){
      lancamento.dataVencimento = moment( lancamento.dataVencimento, 'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento){
        lancamento.dataPagamento = moment( lancamento.dataPagamento, 'YYYY-MM-DD').toDate();
      }
    }

  }

}
