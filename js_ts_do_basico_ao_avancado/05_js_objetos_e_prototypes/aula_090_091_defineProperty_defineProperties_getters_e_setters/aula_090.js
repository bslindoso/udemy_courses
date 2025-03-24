// defineProperty e defineProperties

/**
 * Usando o this, tornamos pública uma propriedade
 * sem ela, não retorna a propriedade no objeto contruído
 */
function Produto1(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  estoque = estoque;
}

const p1 = new Produto1('Camiseta', 20, 3);
console.log(p1); // Produto1 { nome: 'Camiseta', preco: 20 }

/** 
 * Object.defineProperty()
 */
function Produto2(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // atribui o valor do parâmetro
    writable: true, // pode ou não alterar o valor
    configurable: false // configurável ou não
  });
}

const produto2 = new Produto2('Shorts', 45, 5);
// produto2.estoque = 1000000; // dá erro se writable false
// delete produto2.estoque; // dá erro se configurable false
console.log(produto2, '=>', Object.keys(produto2));

/**
 * Object.defineProperties()
 */
function Produto3(nome, preco, estoque) {

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    },
    estoque: {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: true
    }
  });
}

const produto3 = new Produto3('Tênis', 199, 2);
console.log(produto3);

/**
 * Getters e Setters
 */