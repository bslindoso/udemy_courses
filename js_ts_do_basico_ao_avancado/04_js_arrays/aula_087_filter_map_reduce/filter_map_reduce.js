/**
 * Vamos combinar o Filter, Map e Reduce
*/

/**
 * Retorne a soma do dobro de todos os pares;
 * -> Filtrar pares;
 * -> Dobrar os valores;
 * -> Reduzir (somar tudo);
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDoDobroDosPares = numeros
  .filter(numero => numero % 2 === 0)
  .map(numero => numero * 2)
  .reduce(((acc, numero) => acc + numero));

console.log(somaDoDobroDosPares);