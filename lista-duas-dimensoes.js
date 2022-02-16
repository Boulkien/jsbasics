const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

console.log(`${listaDeNotasEAlunos[0][1]}, a sua média é ${listaDeNotasEAlunos[1][1]}`)

let idades = [30, 35, 28]
let nomes = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]

console.log(`${funcionarios[0][0]} tem ${funcionarios[1][0]} anos e ela faz faculdade? ${funcionarios[2][0]}.`)

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)