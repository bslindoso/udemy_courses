/**
 * Reduce => Retorna um único valor a partir dos valores da array;
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números
let soma = numeros.reduce((acumulador, valor, indice, array) => {
  return acumulador + valor
}, 0); // valor inicial para o acumulador (opicional)
console.log(soma);
// OU forma reduzida
soma = numeros.reduce((acc, num) => acc + num);
console.log(soma);

// OBS: Quando não manda um valor para o acumulador inicial, o reduce assume o primeiro valor do array como o acumulador.

// Some todos os números pares
const pares = numeros.reduce((acc, num) => {
  if (num % 2 === 0) acc += num;
  return acc;
}, 0);
console.log(pares);

// Some todos os números pares
const inpares = numeros.reduce((acc, num) => {
  if (num % 2 !== 0) acc += num;
  return acc;
}, 0);
console.log(inpares);

/**
 * Retorne a pessoa mais velha
 */
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce((acc, pessoa) => {
  if (acc.idade < pessoa.idade) {
    return pessoa;
  }
  return acc;
});
console.log(pessoaMaisVelha);