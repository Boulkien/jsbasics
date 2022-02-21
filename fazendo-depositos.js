const cliente = {
    nome: "André",
    idade: 36,
    cpf: "65498732112",
    email: "andre@email.com",
    fones: ["789456132", "321654987"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor
    },
}

console.log(cliente.saldo)
console.log(cliente.depositar(30))
console.log(cliente.saldo)