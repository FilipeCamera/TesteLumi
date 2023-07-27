import { IContaEnergiaRepository } from "@data/repository/conta-energia-repository";
import { LerContaEnergia } from "@domain/use-cases/ler-conta-energia";

class DatabaseLerContaEnergia implements LerContaEnergia {
  constructor(
    private readonly contaEnergiaRepository: IContaEnergiaRepository
  ) {}

  async exec(): Promise<LerContaEnergia.response> {
    const contas = await this.contaEnergiaRepository.read();

    if (contas.length == 0)
      throw new Error("Não foi encontrada nenhuma conta de energia!");

    return contas;
  }
}

export { DatabaseLerContaEnergia };
