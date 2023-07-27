import ContaEnergia, { ContaEnergiaData } from "../model/conta-energia";

interface CriarContaEnergia {
  exec(data: CriarContaEnergia.request): Promise<CriarContaEnergia.response>;
}

namespace CriarContaEnergia {
  export type request = ContaEnergiaData;

  export type response = ContaEnergia;
}

export { CriarContaEnergia };
