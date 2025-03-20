/**
 * Map => Retorna uma array com o mesmo tamanho da array original;
 * retorna um valor para cada iteração;
*/

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

/**
 * Retorne as pessoas que tem o nome com 5 letras ou mais;
 * Retorne as pessoas com mais de 50 anos;
 * Retorne as pessoas cujo o nome termina com "a";
 */
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasCom5LetrasOuMais = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(pessoasCom5LetrasOuMais);

const pessoasComMaisDe50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(pessoasComMaisDe50Anos)

const pessoasNomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.charAt(pessoa.nome.length - 1) === 'a');
console.log(pessoasNomeTerminaComA);