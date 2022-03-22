const repository = require('../fileData/fileData-repository');

jest.mock('../fileData/fileData-model', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('fileData',  {
        "name": "Mario",
        "Débito": "10",
        "Boleto": "30",
        "Financiamento": "40",
        "Crédito": "0",
        "Recebimento Empréstimo": "10",
        "Vendas": "20",
        "Recebimento TED": "110",
        "Recebimento DOC": "110",
        "Aluguel": "440"
    })
  });

  describe("Test Sequelize Mocking", () => {  
    it("Should get value from mock", async () => {
      const user = JSON.stringify( await repository.getValueByType(), null, 2 );
      const parse = JSON.parse(user);
      expect(parse[0].name).toEqual('Mario')
    })
  });

