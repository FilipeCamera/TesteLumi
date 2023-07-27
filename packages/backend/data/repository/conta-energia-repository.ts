import ContaEnergia, { ContaEnergiaData } from "@domain/model/conta-energia";

interface IContaEnergiaRepository {
  create(data: ContaEnergiaData): Promise<ContaEnergia>;
  read(): Promise<ContaEnergia[]>;
}

export { IContaEnergiaRepository };
