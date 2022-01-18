import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Lancamento } from 'app/domain/lancamento';

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

  pesquisar(): Promise<any>{

    const headers: Headers = new Headers();

    headers.append("Authorization","Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==");

    return this.http.get(`${this.lancamentoUrl}?resumo`, { headers: headers })        // Pode ser passado somente { headers }
            .toPromise()
            .then( response => response.json().content );

  }

}
