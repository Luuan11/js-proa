//Faça um programa que receba dois números reais e mostre um menu de opções (Subtrair, Somar, Multiplicar e Dividir), realizando a operação de acordo com a opção escolhida no menu e mostrando o resultado.

function cálculos(){
    let choose = parseInt(prompt(`O que deseja ?  1. Subtrair  2. Somar 3. Multiplicar  4. Dividir 5. Sair`));

    if(choose === 1){
        subtrair();
    } else if (choose === 2) {
        somar();
    } else if (choose === 3) {
        multi();
    } else if (choose === 4) {
        dividir();
    } else if (choose === 5) {
        sair();
    }
}

function subtrair(){
    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    let resultado = n1 - n2 

    document.write(`O resultado da Subtração será ${resultado}`)
}

function somar(){
    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    let resultado = n1 + n2 

    document.write(`O resultado da Somar será ${resultado}`);
}

function multi(){
    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    let resultado = n1 * n2 

    document.write(`O resultado da multiplicação será ${resultado}`);
}

function dividir(){
    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    let resultado = n1 / n2 

    document.write(`O resultado da divisão será ${resultado}`);
}

function exit() {
        let certeza = confirm ("Deseja realmente sair? ");
        if (certeza) {
            window.alert(`:D`);
            window.close();
        } else {
        cálculos();

}
}
cálculos()