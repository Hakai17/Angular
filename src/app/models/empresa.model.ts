export class Empresa {
    id?: number;
    nome: string;
    cnpj: string;
    data_criacao: string | Date;

    constructor(id: number, nome: string, cnpj: string, data_criacao: string) {
      this.id = id;
      this.nome = nome;
      this.cnpj = cnpj;
      this.data_criacao = data_criacao;
    }
  }
