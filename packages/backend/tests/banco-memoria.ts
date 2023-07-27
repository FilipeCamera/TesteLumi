import { LerContaEnergia } from "@domain/use-cases/ler-conta-energia";
import { IContaEnergiaRepository } from "../data/repository/conta-energia-repository";
import ContaEnergia, { ContaEnergiaData } from "../domain/model/conta-energia";

class BancoMemoria implements IContaEnergiaRepository {
  public banco: ContaEnergia[] = [];

  async create(data: ContaEnergiaData): Promise<ContaEnergia> {
    const conta = new ContaEnergia(data);

    this.banco.push(conta);

    return conta;
  }

  async read(): Promise<ContaEnergia[]> {
    if (this.banco.length === 0)
      throw new Error("Não foi encontrada nenhuma conta de energia!");

    return this.banco;
  }
}

export { BancoMemoria };
