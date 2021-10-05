//Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let n1 = Number(prompt('Digite o primeiro valor: '));
        let n2 = Number(prompt('Digite o segundo valor: '));
        let n3 = Number(prompt('Digite o terceiro valor: '));

        if(n1 > n2 && n1 > n3){
            document.write(`${n1} o primeiro valor é maior `);
        }
        if(n2 > n1 && n2 > n3){
            document.write(`${n2} o segundo valor é maior `);
        }
        if(n3 > n2 && n3 > n2){
            document.write(`${n3} o terceiro valor é maior `);
        }