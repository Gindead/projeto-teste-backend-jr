const vendas = require('../../business/vendas');

module.exports = async (req, res) => {
    try {
        let pedidos = req.body.pedidos || [];

        const vendedores = [...new Set(pedidos.map(item => item.vendedor))];

        let response = await vendas.calculoComissao(pedidos, vendedores);

        res.status(200).send({comissoes: response});
    } catch (e) {
        res.status(500).send({error: e.message});
    }
};