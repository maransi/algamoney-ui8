import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CategoriaService {

  categoriaUrl = "http://localhost:8080/categorias";
  
  constructor(@Inject( AuthHttp ) private http) { }

  listarTodas(): Promise<any>{

    return this.http.get( this.categoriaUrl )
              .toPromise()
              .then( response => response.json() );

  }


}
