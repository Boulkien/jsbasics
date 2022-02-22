const clientes = [
    {
        nome:"André",
        cpf: "98765432132",
        dependentes: [{
            nome: "Sara",
            parentesco:"filha",
            dataNasc: "20/03/2011"
        }, 
        {
            nome:"Samia",
            parentesco:"filha",
            dataNasc:"04/01/2014",
            
        }]
    },
    {
        nome:"Juliana",
        cpf:"32165498778",
        dependentes: [{
            nome:"Sophia",
            parentesco: "filha",
            dataNasc:"30/08/2020"
        }],
    }
]

const listaDependetes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependetes)
