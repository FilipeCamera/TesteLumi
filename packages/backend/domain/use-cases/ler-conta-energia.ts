import ContaEnergia from "../model/conta-energia";

interface LerContaEnergia {
  exec(): Promise<LerContaEnergia.response>;
}

namespace LerContaEnergia {
  export type response = ContaEnergia[] | Error;
}

export { LerContaEnergia };
