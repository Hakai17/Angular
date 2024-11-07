import { Empresa } from './empresa.model';

export class Socio {
  id?: number;
  nome: string;
  cpf: string;
  dataCriacao: string | Date;
  empresa: Empresa;

  constructor(id: number, nome: string, cpf: string, dataCriacao: string, empresa: Empresa) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.dataCriacao = dataCriacao;
    this.empresa = empresa;
  }
}

export interface SocioCreatePayload {
  nome: string;
  cpf: string;
  empresa_id: number;
}
