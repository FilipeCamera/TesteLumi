import { randomUUID } from "node:crypto";

type Energia = {
  kwh: string;
  precoUnit: number;
  valor: number;
};

type ContaEnergiaData = {
  numeroCliente: number;
  mesReferencia: Date;
  dataVencimento: Date;
  energiaEletrica: Energia;
  energiaInjetada: Energia;
  encomp: Energia;
  contribuicaoIPM: number;
  valorTotal: number;
};

class ContaEnergia {
  private _id: string;
  numeroCliente: number;
  mesReferencia: Date;
  dataVencimento: Date;
  energiaEletrica: Energia;
  energiaInjetada: Energia;
  encomp: Energia;
  contribuicaoIPM: number;
  valorTotal: number;

  constructor(data: ContaEnergiaData, id?: string) {
    this._id = id ?? randomUUID();
    this.numeroCliente = data.numeroCliente;
    this.mesReferencia = data.mesReferencia;
    this.dataVencimento = data.dataVencimento;
    this.energiaEletrica = data.energiaEletrica;
    this.energiaInjetada = data.energiaInjetada;
    this.encomp = data.encomp;
    this.contribuicaoIPM = data.contribuicaoIPM;
    this.valorTotal = data.valorTotal;
  }

  public get id() {
    return this._id;
  }
}

export { Energia, ContaEnergiaData, ContaEnergia as default };
