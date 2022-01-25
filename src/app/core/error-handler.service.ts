import { Inject, Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor( @Inject( ToastyService ) private toasty) { }

  handle( errorResponse: any ){
    let msg: string;

    if ( typeof errorResponse === "string"){
      msg = errorResponse;
    }else{
      msg = "Erro ao processar serviço remoto. Tente novamente!!!";

      console.log("Ocorreu um erro ", errorResponse );
    }

    this.toasty.error(msg);    
  }


}