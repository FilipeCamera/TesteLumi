import { ContaEnergiaData } from "../../domain/model/conta-energia";
import { BancoMemoria } from "../../tests/banco-memoria";
import { DatabaseCriarContaEnergia } from "./db-criar-conta-energia";

describe("Teste de criar conta de energia no banco", () => {
  it("Criando uma conta de energia", async () => {
    const repository = new BancoMemoria();
    const database = new DatabaseCriarContaEnergia(repository);

    const contaEnergia: ContaEnergiaData = {
      numeroCliente: 12345,
      dataVencimento: new Date(),
      mesReferencia: new Date(),
      encomp: {
        kwh: "1",
        precoUnit: 0.02,
        valor: 0.05,
      },
      energiaEletrica: {
        kwh: "1",
        precoUnit: 0.02,
        valor: 0.05,
      },
      energiaInjetada: {
        kwh: "1",
        precoUnit: 0.02,
        valor: 0.05,
      },
      contribuicaoIPM: 0.25,
      valorTotal: 128.89,
    };

    const conta = await database.exec(contaEnergia);

    expect(conta).toBeTruthy();
    expect(conta.numeroCliente).toBe(contaEnergia.numeroCliente);
  });
});
