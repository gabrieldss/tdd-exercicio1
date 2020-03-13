const { toBeDeepCloseTo }
    = require ('jest-matcher-deep-close-to');
    expect.extend({ toBeDeepCloseTo });

const Calculadora = require ('../lib/calculadora');
let calculadora = new Calculadora();


describe('Calculadora', () => {
    test('cliente que ganha menos de 1000', () => {
        let props = calculadora.montarPropostas({
            nome: 'Joao da Silva',
            salario: 800.00,
            idade: 29,
            valorFinanciado: 1000.00
        });
        expect(props.length).toBe(2);
        expect(props[0]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 2,
            valorParcela: 1000.00
        },2);
        expect(props[1]).toBeDeepCloseTo({
            total: 2000.00,
            parcelas: 3,
            valorParcela: 666.66
        },2);
    });
        test('cliente que ganha ate 5000', () => {
            let cliente2 = {
                nome: 'Maria da Silva',
                salario: 3000.00,
                idade: 29,
                valorFinanciado: 1000.00
            };
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
