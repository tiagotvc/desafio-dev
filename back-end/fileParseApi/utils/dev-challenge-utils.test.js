const { mapLine } = require ('./dev-challenge-utils');

let textMock = '3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO \n'
const expected = [
        {
            type: '3',       
            date: '20190301',
            value: 14200,    
            cpf: '9620676017',
            card: '753****3153',
            time: '53453',
            shop_owner: 'JOÃO MACEDO  ',
            shop_name: 'BAR DO JOÃO '
        },
        {
            type: '',
            date: '',
            value: 0,
            cpf: '',
            card: '',
            time: '',
            shop_owner: '',
            shop_name: ''
        }
]


describe("Test mapLine function return", () => {  
    it("Should turn a string line with line breaker into two objects", async () => {
        let text = textMock.split("\n"); 
        const response = mapLine(text)
        expect(response).toEqual(expect.arrayContaining(expected));
    })
  });