// A Wesley Peças Automotivas calcula o preço de venda dos seus produtos com uma margem de aumento x%. Portanto, construa um algoritmo em Javascript que, dados o valor de custo e a margem de aumento, imprima o preço de venda. O usuário deve informar tanto o valor do produto quanto a margem de lucro.

let valor = Number(prompt("Digite seu valor do produto"));

        let margem = Number(prompt("Digite a margem do produto"));

        let final = (margem/100) + 1;
        document.write(`Valor do produto é :${valor * final},00 Reais`)