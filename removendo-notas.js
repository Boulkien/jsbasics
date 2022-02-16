const notas = [10, 7, 8, 5, 10]
notas.pop()

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(notas)
console.log(`A média de suas notas é ${media}.`)