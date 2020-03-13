const Calculadora = require ('../lib/calculadora')

describe('Calculadora', () => {
    test('cliente que ganha menos de 1000', () => {
        let cliente = {
            nome: 'Joao da Silva',
            salario: 800.00,
            idade: 29,
            valorFinanciado: 1000.00
        };
        let calculadora = new Calculadora();
        let props = calculadora.montarPropostas(cliente);
        expect(props.length).toBe(2);
        expect(props[0].total).toBeCloseTo(2000.00);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].valorParcela).toBeCloseTo(1000.00);
        expect(props[1].total).toBeCloseTo(2000.00);
        expect(props[1].parcelas).toBe(3);
        expect(props[1].valorParcela).toBeCloseTo(666.666);
    });
        test('cliente que ganha ate 5000', () => {
            let cliente2 = {
                nome: 'Maria da Silva',
                salario: 3000.00,
                idade: 29,
                valorFinanciado: 1000.00
            };
            let calculadora = new Calculadora();
            let props2 = calculadora.montarPropostas2(cliente2);
            expect(props2.length).toBe(3);
            expect(props2[0].total).toBeCloseTo(1300.00);
            expect(props2[0].parcelas).toBe(2);
            expect(props2[0].valorParcela).toBeCloseTo(650.00);
            expect(props2[1].total).toBeCloseTo(1500.00);
            expect(props2[1].parcelas).toBe(4);
            expect(props2[1].valorParcela).toBeCloseTo(375.00);
            expect(props2[2].total).toBeCloseTo(1500.00);
            expect(props2[2].parcelas).toBe(10);
            expect(props2[2].valorParcela).toBeCloseTo(150.00);
        });
        test('cliente que ganha mais de 5000', () => {
            let cliente3 = {
                nome: 'Fernando da Silva',
                salario: 6000.00,
                idade: 29,
                valorFinanciado: 1000.00
            };
            let calculadora = new Calculadora();
            let props3 = calculadora.montarPropostas3(cliente3);
            expect(props3.length).toBe(4);
            expect(props3[0].total).toBeCloseTo(1100.00);
            expect(props3[0].parcelas).toBe(2);
            expect(props3[0].valorParcela).toBeCloseTo(550.00);
            expect(props3[1].total).toBeCloseTo(1300.00);
            expect(props3[1].parcelas).toBe(4);
            expect(props3[1].valorParcela).toBeCloseTo(325.00);
            expect(props3[2].total).toBeCloseTo(1300.00);
            expect(props3[2].parcelas).toBe(10);
            expect(props3[2].valorParcela).toBeCloseTo(130.00);
            expect(props3[3].total).toBeCloseTo(1400.00);
            expect(props3[3].parcelas).toBe(20);
            expect(props3[3].valorParcela).toBeCloseTo(70.00);
        });
        
});
