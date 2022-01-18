import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Lancamento } from 'app/domain/lancamento';
import { URLSearchParams} from '@angular/http';
import * as moment from 'moment';

export interface LancamentoFiltro{
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}


@Injectable()
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor( private http: Http,
                private httpClient: HttpClient) { }

  pesquisarLancamentoObs(): Observable<Lancamento[]>{
    return this.httpClient.get<Lancamento[]>(`${this.lancamentoUrl}?resumo`,
                                      { headers: new HttpHeaders()
                                                .set("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==")
                                      });
  }

  pesquisar( filtro: LancamentoFiltro ): Promise<any>{

    const headers: Headers = new Headers();

    const params = new URLSearchParams();

    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");

    if ( filtro.descricao ){
      params.set("descricao", filtro.descricao );
    }

    if ( filtro.dataVencimentoInicio ){
      params.set("dataVencimentoDe", moment(filtro.dataVencimentoInicio).format("YYYY-MM-DD") );
    }

    if ( filtro.dataVencimentoFim ){
      params.set("dataVencimentoAte", moment(filtro.dataVencimentoFim).format("YYYY-MM-DD") );
    }


    return this.http.get(`${this.lancamentoUrl}?resumo`, { headers: headers, search: params  })        // Pode ser passado somente { headers }
            .toPromise()
            .then( response => response.json().content );

  }

}
