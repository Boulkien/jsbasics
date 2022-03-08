const listaLivros = require("./arrayOrdenado")

function busca (arr, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2)
    const atual = arr[meio];

    if ( de > ate) {
        return -1;
    }
    
    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(arr, de, meio - 1, valorBuscado)
    }

    if (valorBuscado > atual.preco) {
        return busca(arr, meio + 1, ate, valorBuscado)
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 15))