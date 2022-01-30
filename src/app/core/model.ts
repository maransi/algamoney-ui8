export class Pessoa{
    codigo: number;
    nome: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    ativo: number;
}    

export class Categoria{
    codigo: number;
}

export class Lancamento{
    codigo: number;
    tipo: "RECEITA";
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    observacao: string;
    pessoa = new Pessoa();
    categoria = new Categoria();
}