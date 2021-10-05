//Reescreva o código abaixo como um programa do Javascript.

//Sem imagem, Tururuuuu!

let n1 = parseInt(prompt("Digite a sua 1* nota: "));
        let n2 = parseInt(prompt("Digite a sua 2* nota: "));
        let media = (n1 + n2) /2;

        if (media >= 7){
            document.write(`Aprovado sua média é: ${media}`);
        }else{
            document.write(`Reprovado sua média foi ${media}`);
        }