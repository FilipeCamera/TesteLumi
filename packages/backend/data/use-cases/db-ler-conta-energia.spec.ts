import { ContaEnergiaData } from "../../domain/model/conta-energia";
import { BancoMemoria } from "../../tests/banco-memoria";
import { DatabaseCriarContaEnergia } from "./db-criar-conta-energia";
import { DatabaseLerContaEnergia } from "./db-ler-conta-energia";

const repository = new BancoMemoria();

describe("Teste de ler conta de energia no banco", () => {
  beforeAll(async () => {
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

    await database.exec(contaEnergia);
    await database.exec(contaEnergia);
    await database.exec(contaEnergia);
  });
  it("Ler contas de energia", async () => {
    const database = new DatabaseLerContaEnergia(repository);

    const contas = await database.exec();
    expect(contas).toBeTruthy();
    expect(contas).toHaveLength(3);
  });
});
