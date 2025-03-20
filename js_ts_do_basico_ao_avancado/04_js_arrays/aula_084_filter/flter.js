/**
 * Filter => Retorna uma array filtrada (menor ou mesmo tamanho que a array original) 
 * de acordo com o retorno da condição da função callback;
 * se o etorno for true, adiciona o valor ao array;
 * se for false, não adiciona.
*/

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez);

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