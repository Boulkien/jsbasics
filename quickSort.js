const listaLivros = require ("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        let indiceAtual = particiona(arr, left, right)

        if (left < indiceAtual - 1){
            quickSort(arr, left, indiceAtual-1);
        }
        
        if (indiceAtual < right){
            quickSort(arr, indiceAtual, right)
        }
    }

    return arr;
}


function particiona(arr, left, right) {
    let pivo = arr[Math.floor((left + right) / 2)]
    let atualLeft = left;
    let atualRight = right;

    while (atualLeft <= atualRight) {

        while(arr[atualLeft].preco < pivo.preco) {
            atualLeft++
        }

        while(arr[atualRight].preco > pivo.preco) {
            atualRight--
        }

        if(atualLeft <= atualRight) {
            trocaLugar(arr, atualLeft, atualRight);
            atualLeft++
            atualRight--
        }
    }

    return atualLeft;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))