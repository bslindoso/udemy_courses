// ! ===========================================================
// !    => Criando um Produto
// ! ===========================================================
// Temos Produtos como abstração de meus produtos
// Mas temos alguns produtos específicos que tem atributos extras, como exemplo:
// ? Camisa => Cor
// ? Caneca => Material
// Podemos utilizar da Herança 
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
}
// Usando o prototype para atribuir os métodos 
Produto.prototype.aumento = function (valor) {
  this.preco += valor;
}
Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
}

// ! ===========================================================
// !    => Usando Função construtora para criar um novo objeto que "Herda"
// ! ===========================================================
// Função construtora Camisa usando o Produto.call faz com que ela seja criada como se fosse um Produto
function Camisa(nome, preco, estoque, cor) {
  Produto.call(this, nome, preco, estoque);
  this.cor = cor;
}
// => Aqui linkamos o prototype do Produto com a Camisa
Camisa.prototype = Object.create(Produto.prototype);
// => Aqui corrigimos a informação de que o contrutor é Camisa e não Produto
Camisa.prototype.constructor = Camisa;

const camisa1 = new Camisa('Polo', 199.9, 100, 'Azul');
console.log(camisa1);

// Criando um produto genérico a fins de comparação
const produto = new Produto('Genérico', 111, 10);
console.log(produto);

// ! ===========================================================
// !    => Criando uma função construtora Caneca que herda Produto
// ! ===========================================================
function Caneca(nome, preco, estoque, material) {
  Produto.call(this, nome, preco, estoque);

  Object.defineProperty(this, "material", {
    enumerable: true,
    configurable: false,
    get: function () {
      return material;
    },
    set: function (mat) {
      material = mat;
    }
  })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Capyvara', 39.99, 25, 'Porcelana');
console.log(caneca);