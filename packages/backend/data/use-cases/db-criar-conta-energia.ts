import ContaEnergia, {
  ContaEnergiaData,
} from "../../domain/model/conta-energia";
import { CriarContaEnergia } from "../../domain/use-cases/criar-conta-energia";
import { IContaEnergiaRepository } from "../repository/conta-energia-repository";

class DatabaseCriarContaEnergia implements CriarContaEnergia {
  constructor(
    private readonly contaEnergiaRepository: IContaEnergiaRepository
  ) {}

  async exec(
    data: CriarContaEnergia.request
  ): Promise<CriarContaEnergia.response> {
    const conta = await this.contaEnergiaRepository.create(data);

    return conta;
  }
}

export { DatabaseCriarContaEnergia };
