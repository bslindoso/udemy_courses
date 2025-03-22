/**
 * Map => Retorna uma array com o mesmo tamanho da array original;
 * retorna um valor para cada iteração;
*/

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa;
 * Remova apenas a chave "nome" do objeto;
 * Adicione uma chave "id" em cada objeto.
 */
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

let chaves = pessoas.map(pessoa => ({ idade: pessoa.idade }));
console.log(chaves);
// OU
chaves = pessoas.map(({ nome, ...idade }) => idade);
console.log(chaves);

const pessoasComIds = pessoas.map((pessoa, index) => ({ id: index + 1, ...pessoa }));
console.log(pessoasComIds);