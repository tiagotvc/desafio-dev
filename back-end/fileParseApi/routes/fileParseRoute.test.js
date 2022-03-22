const supertest = require('supertest');
const app = require("../index");


test('GET /loadParsedData', async () => {
    const response = await supertest(app)
        .get('/api/loadParsedData');
        expect(response.statusCode).toEqual(200);
        expect(response.body.response).toBeTruthy();
});

test('GET /fileParse', async () => {
    const filePath = `${__dirname}/CNAB.txt`;
    const response = await supertest(app)
        .post('/api/fileParse')
        .attach('file', filePath);
        expect(response.statusCode).toEqual(200);
        expect(response.body.response).toBeTruthy();
        expect(response.body.err).toEqual(false);
});
