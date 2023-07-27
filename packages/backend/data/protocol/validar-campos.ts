import { ContaEnergiaData } from "@domain/model/conta-energia";

type ValidarCampoResponse = {
  error: boolean;
  message: string;
};

interface IValidarCampo {
  verificar(data: ContaEnergiaData): Promise<ValidarCampoResponse>;
}

export { IValidarCampo };
