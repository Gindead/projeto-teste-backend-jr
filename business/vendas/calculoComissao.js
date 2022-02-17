const metas = [
    {mes: 1, qtd: 5},
    {mes: 2, qtd: 3},
    {mes: 3, qtd: 2},
    {mes: 4, qtd: 2},
    {mes: 5, qtd: 5},
    {mes: 6, qtd: 60},
    {mes: 8, qtd: 2},
    {mes: 9, qtd: 4},
    {mes: 10, qtd: 4},
    {mes: 11, qtd: 7},
    {mes: 12, qtd: 2}
];

comissaoPedido = (valorVenda) => {
    let porcentagem = 0.0;
    let valorComissao;

    if (valorVenda < 300) {
        porcentagem = 0.01;
    } else if (valorVenda >= 300 && valorVenda <= 1000) {
        porcentagem = 0.03;
    } else if (valorVenda > 1000) {
        porcentagem = 0.05;
    }

    valorComissao = valorVenda * porcentagem;
    return valorComissao.toFixed(2);
};

comissaoBonus = (mes, maiorVenda, qtdVendas) => {
    let valorComissao = 0;
    for (let i in metas) {
        if (mes === metas[i].mes) {
            if (qtdVendas >= metas[i].qtd) {
                valorComissao = maiorVenda * 0.03;
            }
        }
    }

    return valorComissao.toFixed(2);
};


exports.calculoComissao = async (pedidos, vendedores) => {
    try {
        let mesesVendidos = [...new Set(pedidos.map((item) => {
                Periodo = item.data.split("-");
                mesPeriodo = parseInt(Periodo[1]);
                return mesPeriodo
            })
        )];

        let qtdVendas = 0;
        let maiorVenda = 0;
        let comissao = [];
        let valor = 0;

        for (let i in vendedores) {
            for (let j in mesesVendidos) {
                pedidos.map((pedido) => {
                    Periodo = pedido.data.split("-");
                    mesPeriodo = parseInt(Periodo[1]);
                    if (pedido.vendedor === vendedores[i] && mesesVendidos[j] === mesPeriodo) {
                        valor = valor + parseFloat(comissaoPedido(pedido.valor));
                        qtdVendas = qtdVendas + 1
                        maiorVenda = ((pedido.valor > maiorVenda) ? pedido.valor : maiorVenda);
                    }
                })
                if (qtdVendas > 0) {
                    let bonus = parseFloat(comissaoBonus(mesesVendidos[j], maiorVenda, qtdVendas));
                    valor = (valor + bonus).toFixed(2);
                    comissao.push({"vendedor": vendedores[i], "mes": mesesVendidos[j], "valor": valor})
                }
                qtdVendas = 0
                maiorVenda = 0
                valor = 0
            }
        }
        return comissao;
    } catch (e) {
        console.log(e);
        throw e;
    }
};