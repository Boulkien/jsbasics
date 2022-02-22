const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "Guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "Capa Élfica +2"
}

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}

console.table(guerreiro)