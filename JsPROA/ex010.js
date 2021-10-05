//Faça um programa que leia um valor informado pelo usuário e imprima todos os valores inteiros entre 1 (inclusive) e o numero informado (inclusive). Considere que o número informado será sempre maior que ZERO.

let i = Number(prompt("Digite um número: "));
        
        while (i >= 1) {
            document.write(`Contagem progressiva: ${i} <br>`);
            i--
         
        }