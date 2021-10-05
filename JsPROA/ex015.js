//A Loja FabiDRONES está promovendo uma promoção onde cada drone artesanal custa R$8.190 e pode ser pago em até 15 vezes sem juros. Crie um programa onde o usuário possa informar o valor parcelas que deseja pagar e exiba o valor de cada parcela.

let parcelas = Number(prompt("Digite o valor de parcelas que deseja"));
        let valor = 8190;

        document.write(`O valor das parcelas é ${valor/parcelas} reais`);
