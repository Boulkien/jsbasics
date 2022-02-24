// Utilizando o this
// function Pessoa(nome, email) {
//     this.nome = nome;
//     this.email = email; 
//     this.imprimeNomeEmail = function () {
//         console.log(`nome: ${this.nome}, email: ${this.email}`)
//     }
// }

// const pessoa1 = new Pessoa ("Ana", "ana@email.com")
// const pessoa2 = new Pessoa ("Paula", "paula@email.com")

// pessoa1.imprimeNomeEmail()
// pessoa2.imprimeNomeEmail()

// Utilizando o call()

// function imprimeNomeEmail(tipoCliente) {
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
// }

// const cliente1 = {
//     nome : "Carlos",
//     email : "carlos@email.com"
// }

// const cliente2 = {
//     nome : "Fred",
//     email: "fred@email.com"
// }

// imprimeNomeEmail.call(cliente1, "Cliente Especial")
// imprimeNomeEmail.call(cliente2, "Cliente Estudante")

// Utilizando o apply()

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
}
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
imprimeNomeEmail.apply(cliente2, clienteEstudante)

// Utilizando o bind()

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar
const personagemDefinido = personagemGenerico.bind(personagem)

console.log(personagemDefinido())
