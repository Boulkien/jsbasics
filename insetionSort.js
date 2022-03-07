const livros = require("./lista-livros")

function insertSort(lista) {

    for (let atual = 1; atual < lista.length; ++atual) {
        let analise = atual
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]

            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalises

            analise--
        }
    }

    console.log(lista)
}

insertSort(livros);