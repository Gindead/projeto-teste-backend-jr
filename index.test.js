const app = require('./server');
const request = require('supertest');

describe('Teste Comissões', () => {
    it('Vendedor deve receber bonus se atingir a meta', async () => {
        const res = await request(app)
            .post('/api/vendas')
            .send({
                "pedidos": [
                    {"vendedor": 1, "data": "2022-03-01", "valor": 100.00},
                    {"vendedor": 1, "data": "2022-03-01", "valor": 100.00},
                    {"vendedor": 1, "data": "2022-03-01", "valor": 100.00}
                ]
            })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('comissoes');
        console.log(res.body.comissoes);
        expect(res.body.comissoes).toEqual([
            {vendedor: 1, mes: 3, valor: "6.00"},
        ]);
    })
    it('Vendedor deve não receber bonus se atingir a meta', async () => {
        const res = await request(app)
            .post('/api/vendas')
            .send({
                "pedidos": [
                    {"vendedor": 1, "data": "2022-03-01", "valor": 100.00}
                ]
            })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('comissoes');
        console.log(res.body.comissoes);
        expect(res.body.comissoes).toEqual([
            {vendedor: 1, mes: 3, valor: "1.00"},
        ]);
    })
    it('Vendedor deve receber comissao segundo a faixa', async () => {
        const res = await request(app)
            .post('/api/vendas')
            .send({
                "pedidos": [
                    {"vendedor": 1, "data": "2022-03-01", "valor": 1000.00}
                ]
            })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('comissoes');
        console.log(res.body.comissoes);
        expect(res.body.comissoes).toEqual([
            {vendedor: 1, mes: 3, valor: "30.00"},
        ]);
    })
})