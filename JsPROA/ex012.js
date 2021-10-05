// Faça um programa que leia 10 números informados pelo usuário e ao final da leitura escrever a soma total dos 10 números lidos.

let soma = 0;

        for(i=1 ;i<= 10; i++){
            let num = Number(prompt("Digite um número: "));
            soma += num
        }
        document.write(`A Soma é  ${soma}`);