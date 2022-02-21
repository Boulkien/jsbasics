const cliente = {
    nome: "André",
    idade: 36,
    cpf: "65498732112",
    email: "andre@email.com",
    fones: ["789456132", "321654987"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

// console.log(cliente) 

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc ==="04/01/2014")

console.log(filhaMaisNova[0].nome)
