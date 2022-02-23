// Exemplo de Classe
class Pessoa {

    //Atributos
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }

    //Comportamento
    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }

}

// Exemplo de Herança
class Programador extends Pessoa {
     constructor(nome, sobrenome, cpf, email, linguagem) {
         super(nome, sobrenome, cpf, email)
         this.linguagem = linguagem
     }
}

//Objeto é a INSTÂNCIA de uma classe
const franco = new Programador ("Franco", "Ramires", "6543219758", "franco@email.com", "JavaScript e Node.js")

console.log(franco)
