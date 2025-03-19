/// Exemplo 1
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const [a, b, c, ...resto] = letras;
console.log('Exemplo 1');
console.log(a, b, c);
console.log(resto);

/// Exemplo 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, n2, , n4, , n6, ...restoNumeros] = numeros;
console.log('Exemplo 2');
console.log(n2, n4, n6);
console.log(restoNumeros);

/// Exemplo 3
const listaDeListas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, , ln6], lista3] = listaDeListas;
console.log('Exemplo 3');
console.log(ln6);
console.log(lista3);