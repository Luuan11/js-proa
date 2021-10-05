//Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

let n1 = Number(prompt("Qual o primeiro número?"));
let n2 = Number(prompt("Qual o segundo número?"));
let n3 = Number(prompt("Qual o terceiro número?"));
let soma;

if (n3 < n1 && n1 < n2) {
    soma = n1 + n2;
    document.write(`A soma será ${soma}`);
} else if (n2 < n1 && n1 < n3) {
    soma = n1 + n3;
    document.write(`A soma será ${soma}`);
} else if (n1 > n3) {
    soma = n1 + n2;
    document.write(`A soma será ${soma}`);
}
else {
    soma = n2 + n3;
    document.write(`A soma será ${soma}`);
}