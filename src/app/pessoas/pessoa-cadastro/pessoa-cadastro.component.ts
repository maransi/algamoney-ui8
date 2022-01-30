import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pessoa } from 'app/core/model';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  estados = [
              {label: 'AC', value: 'Acre'},
              {label: 'AL', value: 'Alagoas' },
              {label: 'AP', value: 'Amapá' },
              {label: 'AM', value: 'Amazonas' },
              {label: 'BA', value: 'Bahia' },
              {label: 'CE', value: 'Ceará' },
              {label: 'DF', value: 'Distrito Federal' },
              {label: 'ES', value: 'Espírito Santo' },
              {label: 'GO', value: 'Goiás' },
              {label: 'MA', value: 'Maranhão' },
              {label: 'MT', value: 'Mato Grosso' },
              {label: 'MS', value: 'Mato Grosso do Sul' },
              {label: 'MG', value: 'Minas Gerais' },
              {label: 'PA', value: 'Pará' },
              {label: 'PB', value: 'Paraíba' },
              {label: 'PR', value: 'Paraná' },
              {label: 'PE', value: 'Pernambuco' },
              {label: 'PI', value: 'Piauí' },
              {label: 'RJ', value: 'Rio de Janeiro' },
              {label: 'RN', value: 'Rio Grande do Norte' },
              {label: 'RS', value: 'Rio Grande do Sul' },
              {label: 'RO', value: 'Rondônia' },
              {label: 'RR', value: 'Roraima' },
              {label: 'SC', value: 'Santa Catarina' },
              {label: 'SP', value: 'São Paulo' },
              {label: 'SE', value: 'Sergipe' },
              {label: 'TO', value: 'Tocantins' }
            ];

//    pessoa = { nome: '', cidade: '', estado: '', status: '' };
  pessoa = new Pessoa();

  constructor() { }

  ngOnInit() {
  }

  salvar(form: FormControl){
    console.log( this.pessoa );
  }


}
