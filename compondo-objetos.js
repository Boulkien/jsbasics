const cliente = {
    nome: "André",
    idade: 36,
    cpf: "65498732112",
    email: "andre@email.com",
    fones: ["789456132", "321654987"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)