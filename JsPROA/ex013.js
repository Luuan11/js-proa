//Faça um programa que leia 10 números que o usuário vai informar. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.

let soma = 0 ;
        for(i=1 ;i<= 10; i++){
            let num = Number(prompt("Digite um número: "));
            if(num < 40){
                soma +=num;
            }
        }
    document.write(`O resultado é ${soma}`);