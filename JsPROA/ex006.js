//Faça um programa que leia dois valores e exiba uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let n1 = Number(prompt("Digite seu número1: "))
        let n2 = Number(prompt("Digite seu número2: "))

        if(n1 > n2 ){
            document.write(`${n1} Primeiro maior `);
        }
        if(n1 == n2 ){
            document.write(`${n1} Números iguais`);
        }
        if(n2 > n1 ){
            document.write(`${n2} Segundo Maior `);
        }