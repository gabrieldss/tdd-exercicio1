class Calculadora {
    montarPropostas(cliente) {
        const propostas = [];
        propostas.push({
            total: 2 *cliente.valorFinanciado,
            parcelas: 2,
            valorParcela: (2 *cliente.valorFinanciado) / 2
        });
        propostas.push({
            total: 2 *cliente.valorFinanciado,
            parcelas: 3,
            valorParcela:(2 *cliente.valorFinanciado) / 3
        });
        return propostas;
    }

    montarPropostas2(cliente2) {
        const propostas2 = [];
        propostas2.push({
            total: 1.3 *cliente2.valorFinanciado,
            parcelas: 2,
            valorParcela: (1.3 *cliente2.valorFinanciado) / 2
        });
        propostas2.push({
            total: 1.5 *cliente2.valorFinanciado,
            parcelas: 4,
            valorParcela:(1.5 *cliente2.valorFinanciado) / 4
        });
        propostas2.push({
            total: 1.5 *cliente2.valorFinanciado,
            parcelas: 10,
            valorParcela:(1.5 *cliente2.valorFinanciado) / 10
        });
        return propostas2;
    }

    montarPropostas3(cliente3) {
        const propostas3 = [];
        propostas3.push({
            total: 1.1 *cliente3.valorFinanciado,
            parcelas: 2,
            valorParcela: (1.1 *cliente3.valorFinanciado) / 2
        });
        propostas3.push({
            total: 1.3 *cliente3.valorFinanciado,
            parcelas: 4,
            valorParcela:(1.3 *cliente3.valorFinanciado) / 4
        });
        propostas3.push({
            total: 1.3 *cliente3.valorFinanciado,
            parcelas: 10,
            valorParcela:(1.3 *cliente3.valorFinanciado) / 10
        });
        propostas3.push({
            total: 1.4 *cliente3.valorFinanciado,
            parcelas: 20,
            valorParcela:(1.4 *cliente3.valorFinanciado) / 20
        });
        return propostas3;
    }
}

module.exports = Calculadora;