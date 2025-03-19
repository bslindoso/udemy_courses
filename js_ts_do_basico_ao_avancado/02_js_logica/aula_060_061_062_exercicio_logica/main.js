// Máximo de 2 números
const max = (x, y) => (x > y) ? x : y;

console.log(max(5, 4));
console.log(max(1, 3));
console.log(Math.max(12, 4, 15, 2));

// É Paisagem
const ehPaisagem = (largura, altura) => largura > altura;
console.log(ehPaisagem(200, 100));
console.log(ehPaisagem(50, 150));

// FizzBuzz
/* Escreva uma função que recebe um número e retorne o seguinte:
    Número é divisível por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisível por 3 e 5 = FizzBuzz
    Número NÃO é divisível por 3 e 5 = Retorna o próprio número
    Checar se o número é realmente um número
    Use a função com números de 0 a 100
*/

function fizzBuzz(numero) {
  const fizz = numero % 3 === 0;
  const buzz = numero % 5 === 0;
  const notFizzBuzz = !fizz && !buzz;

  let resultado = '';
  if (fizz) resultado += 'Fizz';
  if (buzz) resultado += 'Buzz';
  if (notFizzBuzz) resultado += numero;

  return resultado;
}


for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}

console.log('string não numérica')
