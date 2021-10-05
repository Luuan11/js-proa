//Faça um programa que leia 10 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

let soma = 0;

        for(i=1 ;i<= 10; i++){
            let num = Number(prompt("Digite um número: "));
            soma += num
        }

        document.write(`A média é  ${soma/10}`);

        //Sem for

        // let n1 = Number(prompt("Digite um número: "));
        // let n2 = Number(prompt("Digite um número: "));
        // let n3 = Number(prompt("Digite um número: "));
        // let n4 = Number(prompt("Digite um número: "));
        // let n5 = Number(prompt("Digite um número: "));
        // let n6 = Number(prompt("Digite um número: "));
        // let n7 = Number(prompt("Digite um número: "));
        // let n8 = Number(prompt("Digite um número: "));
        // let n9 = Number(prompt("Digite um número: "));
        // let n10 = Number(prompt("Digite um número: "));