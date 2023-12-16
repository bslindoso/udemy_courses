// const fatorial = require('./S02 AULA 09 - modulos personalizados').fatorial
const fatorial = require('./fatorial')

console.log("n-fatorial")

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é ${fatorial(num)}`)