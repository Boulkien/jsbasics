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


function offerSecure (obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}.`)
    } else {
        console.log(`Cliente ${obj.nome} não possui dependentes para ofertar seguro.`)
    }
}

offerSecure(cliente)


console.log(Object.values(cliente))
console.log(Object.entries(cliente))
