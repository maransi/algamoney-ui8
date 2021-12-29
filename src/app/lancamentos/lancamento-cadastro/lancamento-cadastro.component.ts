import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [{label: 'Receita', value: 'RECEITA' },
            {label: 'Despesa', value: 'DESPESA'}];

  categorias = [  { label: 'Selecione', value: 0},
                  { label: 'Alimentação', value: 1},
                  { label: 'Transporte', value: 2},
                  { label: 'Água', value: 3},
                  { label: 'Luz', value: 4},
                  { label: 'Telefone', value: 5}
              ];

  pessoas = [  { label: 'Selecione', value: 0},
              { label: 'Marco Antonio', value: 1},
              { label: 'Catia Louse', value: 2 },
              { label: 'Gustavo Rocha', value: 3},
              { label: 'Jose Silva', value: 4},
              { label: 'João Silva', value: 5 },
              { label: 'Maria Jose', value: 6 },
              { label: 'Lucia Marins', value: 7 },
              { label: 'Mariana Fontes', value: 8 },
              { label: 'Carlos Eduardo', value: 9 }
          ];

  constructor() { }

  ngOnInit() {
  }

}
