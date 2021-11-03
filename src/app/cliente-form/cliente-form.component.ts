import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  ultimoId: number = 1;
  salvo: Boolean;
  cpf: String;
  nome: string;
  idade: number;

  @Output()
  clienteAdicionado = new EventEmitter();


  constructor() {

  }

  ngOnInit() {
    this.salvo = false;
    this.cpf = '106.523.608-58';
    this.idade = 55;
    this.nome = 'Jéssica';

  }

  salvar( nome : string ){
    this.salvo = true;

    this.nome = nome;

    const cliente =  { id : ++this.ultimoId,
                        nome : this.nome
                      };

    this.clienteAdicionado.emit( cliente );

    console.log(`Cliente ${this.nome} salvo!!!`);
  }



}
