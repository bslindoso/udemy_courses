/**
 * A função `soma` utiliza a sintaxe `arguments`, que é um objeto array-like disponível dentro de todas as funções.
 * Ele contém todos os argumentos passados para a função.
 * 
 * O `arguments` não é um array real, mas pode ser iterado usando um loop `for...of`.
 * 
 * @returns {number} A soma de todos os argumentos passados para a função.
 */

function soma() {

  console.log(arguments);

  let acumulador = 0;
  for (let arg of arguments) {
    acumulador += arg;
  }

  console.log('Soma:', acumulador);
  return acumulador;
}

soma(1, 2, 3, 4, 5);


/**
 * A função `conta` utiliza o operador rest (`...numeros`) como parâmetro.
 * O operador rest permite que uma função aceite um número indefinido de argumentos como um array.
 * 
 * @param {string} operador - O operador matemático a ser utilizado ('+', '-', '/', '*').
 * @param {number} acumulador - O valor inicial do acumulador.
 * @param {...number} numeros - Uma lista de números a serem operados.
 * @returns {number} O resultado da operação aplicada a todos os números.
 */

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(operador, acumulador);
  return acumulador;
}

conta('+', 0, 20, 30, 40, 50);
conta('-', 200, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);