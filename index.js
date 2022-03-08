const listaLivros = require ("./array")

function mergeSort (arr, nivelAninhamento = 0) {
    console.log(`Nível de Aninhamento = ${nivelAninhamento}`)
    console.log(arr)
    
    if (arr.length > 1 ){
        const meio = Math.floor(arr.length / 2);
        const part1 = mergeSort(arr.slice(0, meio), nivelAninhamento +1)
        const part2 =  mergeSort(arr.slice(meio, arr.length), nivelAninhamento +1)

        arr = ordena(part1, part2)
    }
    
    return arr;
}

console.log(arr)

function ordena(part1, part2){
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = []; 

    while (posicaoAtualPart1 < part1.length && posicaoAtualPart2 < part2.length) {
        let produtoAtualPart1 = part1[posicaoAtualPart1] 
        let produtoAtualPart2 = part2[posicaoAtualPart2]

        if (produtoAtualPart1.preco < produtoAtualPart2.preco) {
            resultado.push(produtoAtualPart1)
            posicaoAtualPart1++
        } else {
            resultado.push(produtoAtualPart2)
            posicaoAtualPart2++
        }
    }

    return resultado.concat(posicaoAtualPart1 < part1.length
        ? part1.slice(posicaoAtualPart1)
        : part2.slice(posicaoAtualPart2))
}

console.log(mergeSort(listaLivros))