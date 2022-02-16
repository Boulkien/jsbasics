const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
        atual + acumulador, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`A média da Sala de JavaScript é de ${mediaSala(salaJs)}.`)
console.log(`A média da Sala de Java é de ${mediaSala(salaJava)}.`)
console.log(`A média da Sala de Python é de ${mediaSala(salaPython)}.`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, valorAtual) => 
    valorAtual + acum, 0) / notas.length
    
console.log(media)