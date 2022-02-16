const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

// .includes --> boolean (true or false)
// .indexOf --> retorna o número do índice (3 no caso de 'Ana')

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return `Aluno ${nomeDoAluno} não está cadastrado.`
    }
}

console.log(exibeNomeENota('Nemo'))

// const numeroIndice = (nomeDoAluno) => {
//     let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
//     return indice
// }

// console.log(numeroIndice('Ana'))